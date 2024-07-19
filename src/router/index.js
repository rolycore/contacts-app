import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddContact from '../views/AddContact.vue';
import ViewContact from '../views/ViewContact.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/add-contact', name: 'add-contact', component: AddContact },
  { path: '/edit-contact/:id', name: 'edit-contact', component: AddContact, props: true },
  { path: '/contact/:id', name: 'contact-detail', component: ViewContact, props: true }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
