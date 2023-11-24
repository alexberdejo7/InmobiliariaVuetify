
<script setup>
import {useRoute } from 'vue-router'
import { doc } from 'firebase/firestore'
import { useDocument, useFirestore } from 'vuefire';
import {priceProperty} from '../helpers/index'
//Mapa
import "leaflet/dist/leaflet.css";
import useLocationMap from '../composables/useLocationMap';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";


const {zoom, center} = useLocationMap()

const db = useFirestore()
const route = useRoute()
const docRef = doc(db, 'propiedades', route.params.id)
const property = useDocument(docRef)



</script>

<template>
  <v-card flat>
          <v-card-title class="mt-5 text-h4 text-center py-3 font-weight-bold">

            {{ property?.titulo }}
          </v-card-title>
                <v-img 
                  :src="property?.imagen" height="350" cover
                />
            
        <div 
        class="bg-blue-grey-lighten-5 d-flex flex-column flex-md-row align-center">
              <v-card-text>
                Baños:
                  <span class="font-weight-bold"> {{ property?.wc }} </span>
              </v-card-text>
              <v-card-text>
                Estacionamiento:
                  <span class="font-weight-bold"> {{ property?.estacionamiento }} </span>
              </v-card-text>
              <v-card-text>
                Habitaciones:
                  <span class="font-weight-bold"> {{ property?.habitaciones }} </span>
              </v-card-text>
              <v-card-text>
                Precio:
                  <span class="font-weight-bold"> {{priceProperty ( property?.precio) }} </span>
              </v-card-text>
        </div> 

        <v-row>
            <v-col
                cols="12"
                md="8"
            >
                <div class="text-pre-wrap py-10">
                  {{ property?.descripcion }}
                </div>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
                    <div class="py-5" style="height: 500px;">

                      <LMap 
                  
                        v-model:zoom="zoom" 
                        :center="center" 
                        :use-global-leaflet="false"
                        >
                      <LMarker 
                        :lat-lng="center"                                                             
                      >
                          <LPopup>
                            {{ property?.titulo }}
                          </LPopup>

                      </LMarker>
                          
                      <LTileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        
                      >
                      </LTileLayer>
                      </LMap>

                      

                    </div>

            </v-col>
        </v-row>
        
    </v-card>
</template>


<style>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>