export default {
	namespaced: true,
	state: {

		items: [{
				title: 'Financial Сalculator',
				author: 'Me',
				date: 'Today',
				hover: true,
				class: 'first'
			},
			{
				title: 'Piroll',
				author: 'Me',
				date: 'Month Ago',
				hover: false,
				class: 'two'

			},
			{
				title: 'Third Project',
				author: 'Me',
				date: 'Three Month Ago',
				hover: false,
				class: 'three'

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



