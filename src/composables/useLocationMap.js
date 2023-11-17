import { ref} from 'vue'

export default function useLocationMap() {


    const zoom = ref(15)
    const center = ref([18.9291345,-99.2136241])


    function pinMarker( e ) {
        const marker = e.target.getLatLng()
        center.value = [marker.lat, marker.lng]

        
        
    }

    return {
        zoom,
        center,
        pinMarker,


    }
}