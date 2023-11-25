import {useFirestore, useCollection, useFirebaseStorage}  from 'vuefire'
import {collection, doc, deleteDoc} from 'firebase/firestore'
import {ref as storageRef, deleteObject} from 'firebase/storage'
import {computed, ref} from 'vue'

export default function usePropiedades() {

    const alberca = ref(false)
    const storage = useFirebaseStorage()
    const db = useFirestore()
    const propertyCollection = useCollection(collection(db, 'propiedades'))

    //ELIMINAR UN ELEMENTO 
    async function deleteItem(id, urlImage) {
        if(confirm('Deseas eliminar la propiedad')) {

            const docRef = doc(db, 'propiedades', id)
            const imageRef = storageRef(storage, urlImage)
            console.log(urlImage)

            await Promise.all([
                deleteDoc(docRef),
                deleteObject(imageRef)
            ])

        }
        
    }

    const filteredItems = computed (() => {
        return alberca.value ?
        propertyCollection.value.filter( property => property.alberca) :
        propertyCollection.value
    })
    

    return {
        propertyCollection,
        filteredItems,
        alberca,
        deleteItem,

    }
}