import { createRouter, createWebHistory } from 'vue-router';
import  Home  from '@/views/Home';
import  Services  from '@/views/Services';
import  Skils from '@/views/Skils';
import Contacts  from '@/views/Contacts';
import  Team  from '@/views/Team';



let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	path: '/Skils',
  	name: 'Skils',
    component: Skils

  },
  {
  	path: '/Contacts',
  	name: 'Contacts',
    component: Contacts
  }, 
  {
  	path: '/Services',
  	name: 'Services',
  	component: Services

  }, {
  	path: '/Team',
  	name: 'Team',
  	component: Team

  },

]


export default createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});


