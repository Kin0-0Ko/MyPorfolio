export default {
	namespaced: true,
	state: {

		items: [{
				title: 'First Project',
				author: 'Me',
				date: 'Today',
				hover: true,
				img: 'first.png'
			},
			{
				title: 'Second Project',
				author: 'Me',
				date: 'Month Ago',
				hover: false,
			},
			{
				title: 'Third Project',
				author: 'Me',
				date: 'Three Month Ago',
				hover: false,
			}
		],
	},
	getters: {
		all: state => state.items,
	},
	mutations: {

		onHover(state, title){
			state.items.forEach(el => {
				if (title == el.title) {
					el.hover = true;

				}
			});
			
		},
		outHover(state, title) {
			state.items.forEach(el => {
				if (title == el.title) {
					el.hover = false;

				}
			});

		}


	},
	actions: {

		hoverOn(store, title){
			store.commit('onHover', title);
		},
		hoverOut(store, title) {
			store.commit('outHover', title);
		}

	}
}



