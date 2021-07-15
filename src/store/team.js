export default {
	namespaced: true,
	state: {
		team: [{
			name: 'Nikita Kov',
			post: 'Web-developer',
			about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit lorem Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor',
			inst: '#',
			twtr: '#',
			git: '#',
			hover: false,

		},
		{
			name: 'Michael Joe',
			post: 'Manager',
			about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit lorem Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor',
			inst: '#',
			twtr: '#',
			git: '#',
			hover: false,

		},
		{
			name: 'Justin West',
			post: 'Designer',
			about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit lorem Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor',
			inst: '#',
			twtr: '#',
			git: '#',
			hover: false,
		}],

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
