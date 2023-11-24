
<script setup>
defineProps({
  property: {
    type: Object,

  },
  price: {
    type: Function,

  }
})
</script>



<template>
  <v-col
    cols="12"
    md="4"
  >
    <v-card>
        <v-img :src="property.imagen" height="270"
          cover
        />

        <v-card-title class="font-weight-bold ">
          {{ property.titulo }}
        </v-card-title>

        <v-card-text>
            {{ property.descripcion }}
        </v-card-text>

        <v-card-text class="font-weight-bold text-h6">
          Precio:  {{price (property.precio) }}
        </v-card-text>


        <template v-slot:actions>
          <v-btn 
              block
              color="indigo"
              variant="flat"
              :to="{name: 'propiedad', params: {id: property.id} }"
              
              
              >
              Mostrar informacion
          </v-btn>

        </template>


    </v-card>
    

  </v-col>
</template>