<script setup>

</script>

<template>
  
    


    <v-card
        flat 
        max-width="600"
        class="mx-auto mt-3"
    >
        <v-card-title class="text-h4 font-weight-bold" tag="h4">
          Iniciar Sesion
        </v-card-title>
        <v-card-subtitle class="text-h7">
          Inicia sesion con tu cuenta
        </v-card-subtitle>

        <v-form class="mt-5">
          <v-text-field
            type="email"
            label="email"
            bg-color="black"
            color="white"
          />
        </v-form>

        
          <v-text-field
            type="password"
            label="Password"
            bg-color="black"
            color="white"
          />

          <v-btn
            block
            color="orange-lighten-4">
            Inicia sesión
          </v-btn>
      
    </v-card>
  
</template>
