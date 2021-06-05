import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

import './assets/scss/app.scss'

let app;

auth.onAuthStateChanged(user => {
    
  //If we do not have an app instance, create a new one  
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')

  }

  //If a user is logged in, fetch profile
  if (user) {
    store.dispatch('fetchUserProfile', user)
  }

})



