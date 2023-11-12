import {defineStore} from 'pinia'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useFirebaseAuth} from 'vuefire'
import {ref, computed} from 'vue'

export const useAuthStore = defineStore('auth', () => {

    const auth = useFirebaseAuth()

    const authUser = ref({})
    const errorMsg = ref('')

    const errorCodes = {
        'auth/user-not-found' : 'Usuario no encontrado',
        'auth/wrong-password' : 'El password es invalido',
       'auth/invalid-login-credentials' : 'Contraseña o correo invalida',
       
        
        
       
    }


    const login = ({email, password}) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          authUser.value = user

          
          
        })
        .catch(error => {
          errorMsg.value = errorCodes[error.code]
          
        })
    }

    const hasError = computed(() => {
        return errorMsg.value
    })



    return {
        login,
        hasError,
        errorMsg
    }
})