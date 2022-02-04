import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import veProgress from "vue-ellipse-progress";

createApp(App).use(store).use(router).use(veProgress).mount('#app')

// import fonts
import {
	library
} from '@fortawesome/fontawesome-svg-core'
import {
	faInstagram,
	faGithub,
	faFacebook,
	faDiscord
} from '@fortawesome/free-brands-svg-icons'
import {
	faCloud,
	faBolt,
	faGavel,
	faUtensils,
	faComments,
	faGift,
	faCoffee,
	faTrophy,
	faRocket,
	faUnlock,
	faLocationArrow,
	faPhoneAlt,
	faBook,
	faCheckCircle,

} from '@fortawesome/free-solid-svg-icons'

library.add(
	faGavel,
	faUtensils,
	faBolt,
	faCloud,
	faFacebook,
	faGithub,
	faInstagram,
	faComments,
	faGift,
	faCoffee,
	faTrophy,
	faRocket,
	faUnlock,
	faLocationArrow,
	faPhoneAlt,
	faBook,
	faDiscord,
	faCheckCircle

)
