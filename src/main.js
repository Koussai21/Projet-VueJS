import { createApp } from 'vue'
import App from './App.vue'
import store from './lib/store'
import router from './router/index'
import vue3GoogleLogin from 'vue3-google-login'



createApp(App).use(store).use(router).use(vue3GoogleLogin, {
                                        clientId: '562452092883-vmh3f4t58rjlr77o71bv0t1p0lhdci4k.apps.googleusercontent.com', 
                                     }).mount('#app');