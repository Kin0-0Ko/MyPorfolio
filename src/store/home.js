export default {
	namespaced: true,
	state: {

		items: [{
				title: 'Financial Сalculator',
				author: 'Me',
				date: '19.09.2020',
				hover: true,
				class: 'first',
				a: 'http://kinko.epizy.com/indexOne.html'
			},
			{
				title: 'Piroll',
				author: 'Me',
				date: '3.05.2019',
				hover: false,
				class: 'two',
				a: 'http://kinko.epizy.com/'

			},
			{
				title: 'Business website',
				author: 'Me',
				date: '24.07.2020',
				hover: false,
				class: 'three',
				a: 'http://kinko.epizy.com/three.html'
			},
			{
				title: 'Blog',
				author: 'Me',
				date: '12.09.2021',
				hover: false,
				class: 'four',
				a: 'https://blog-js-6a0bc.web.app'
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



