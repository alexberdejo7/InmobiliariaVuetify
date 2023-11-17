import {useFirestore, useCollection}  from 'vuefire'
import {collection} from 'firebase/firestore'
import {computed} from 'vue'

export default function usePropiedades() {

    const db = useFirestore()
    const propertyCollection = useCollection(collection(db, 'propiedades'))

    const priceProperty = computed(() => {
        return (price) => 
            Number(price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
                
            })
        
    })

    return {
        propertyCollection,
        priceProperty,

    }
}