export default {
	namespaced: true,
	state: {
		team: [{
			name: 'Nikita Kov',
			post: 'Frontend-developer',
			about: 'Hi! I am a junior front-end developer. I will be glad to work with you',
			inst: '#',
			twtr: '#',
			git: 'https://github.com/Kin0-0Ko',
			hover: false,
		},],

	},
	getters: {
		teammates: state => state.team,

	},
	mutations: {
		onHover(state, name) {
			state.team.forEach(el => {
				if (name == el.name) {
					el.hover = true;
				}
			});

		},
		outHover(state, name) {
			state.team.forEach(el => {
				if (name == el.name) {
					el.hover = false;
				}
			});

		},

	},
	actions: {
		hoverOn(store, name){
			store.commit('onHover', name);
		},
		hoverOut(store, name) {
			store.commit('outHover', name);
		},
	}
}
