<script setup>
import {useForm, useField} from 'vee-validate'
import {loginSchema as validationSchema} from '../validation/loginSchema'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useFirebaseAuth} from 'vuefire'


const auth = useFirebaseAuth()
const {handleSubmit} = useForm({validationSchema})

const email = useField('email')
const password = useField('password')


const submit = handleSubmit((values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
    })
})




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
            label="Email"
            bg-color="black"
            color="white"
            class="mb-3"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
          />
        </v-form>

        
          <v-text-field
            type="password"
            label="Password"
            bg-color="black"
            color="white"
            class="mb-3"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          />

          <v-btn
            block
            color="orange-lighten-4"
            @click="submit"
          >
            Inicia sesión
          </v-btn>
      
    </v-card>
  
</template>
