import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Conversation from '../pages/ConversationIndexPage.vue'
import store from '../lib/store'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { 
  path: '/', 
  name: 'Home', 
  component: Home 
  },
  { 
    path: '/Conversation', 
    name: 'Conversation', 
    component: Conversation,
    beforeEnter: authGuard,
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({

  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const isAuthenticated = () => {
  return store.getters.isLoggedIn; 
};

const authGuard = (to, from, next) => {
  if (isAuthenticated()) {
    next(); 
  } else {
    next('/login'); 
  }
};
        
export default router;
