<script setup>
import usePropiedades from '../../composables/usePropiedades';

const {propertyCollection, priceProperty} = usePropiedades()



</script>


<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold"> Admin panel</h2>

  <v-btn
    color="blue"
    variant="flat"
    :to="{name: 'nueva-propiedad'}">
    
      Nueva Propiedad
  </v-btn>

  <V-card
    class="mx-auto mt-10" 
    flat>
    <v-list>
      <v-list-item
        v-for="property in propertyCollection"
        :key="property.id"
      >
          <template v-slot:prepend>
              <v-list-item-media :start="true">
                <img width="220" :src="property.imagen" />
              </v-list-item-media>
          </template>

          <v-list-item-title> 
            {{ property.titulo }}
          </v-list-item-title>
          <v-list-item-title> 
            {{ priceProperty(property.precio) }}
          </v-list-item-title>
        
          <template v-slot:append>
              <v-btn
                color="indigo-darken-2"
                :to="{name: 'editar-propiedad', params: {id: property.id}}"
                class="mr-2 ">
                Editar
              </v-btn>

              <v-btn
                color="red">
                Eliminar
              </v-btn>

          </template>

      </v-list-item>
      
    </v-list>

  </V-card>


</template>


