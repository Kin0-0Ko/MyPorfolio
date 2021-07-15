import { createStore } from 'vuex'
import home from './home'
import team from './team'
import skils from './skils'



export default createStore({
	modules: {
		home,
		team,
		skils

	},
	strict: process.env.NODE_ENV !== 'production',
});
