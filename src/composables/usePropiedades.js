import {useFirestore, useCollection}  from 'vuefire'
import {collection} from 'firebase/firestore'
import {computed, ref} from 'vue'
export default function usePropiedades() {

    const alberca = ref(false)

    const db = useFirestore()
    const propertyCollection = useCollection(collection(db, 'propiedades'))


    const propertyFilter = computed (() => {
        return alberca.value ?
        propertyCollection.value.filter( property => property.alberca) :
        propertyCollection.value
    })
    

    return {
        propertyCollection,
        propertyFilter,
        alberca,

    }
}