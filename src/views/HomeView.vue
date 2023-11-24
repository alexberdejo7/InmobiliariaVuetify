<script setup>
import usePropiedades from '../composables/usePropiedades'
import Property from '../components/Property.vue';
import {priceProperty} from '../helpers/index'


const {alberca, propertyFilter} = usePropiedades()


</script>

<template>
  
    <h1 class="text-center text-h3 font-weight-bold my-5"> Nuestras propiedades </h1>

    <v-card flat class="py-10">
        <v-card-title class="text-h5">
                        Busqueda
            <v-checkbox label="Alberca" v-model="alberca" />
        </v-card-title>



        <v-row>
            <Property
                v-for="property in propertyFilter" 
                :key="property.id"
                :property="property"
                :price="priceProperty"
            
            
            />
        </v-row>

    </v-card>
  
</template>
