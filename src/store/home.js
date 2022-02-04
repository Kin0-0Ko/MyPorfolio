export default {
	namespaced: true,
	state: {
		items: items(),
	},
	getters: {
		all: state => state.items,
	},
	mutations: {

		onHover(state, title) {
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

		},
		filterJobs(state, btn) {
			//filter in relation to data tag of button
			btn == 'All' ? state.items = items() : state.items = items().filter(el => el.tags == btn) 

		}


	},
	actions: {
		clickOnFilter(store, btn) {
			store.commit('filterJobs', btn.target.dataset.tags)

		},
		hoverOn(store, title) {
			store.commit('onHover', title);
		},
		hoverOut(store, title) {
			store.commit('outHover', title);
		}

	}
}

function items() {		//return projects items
	return [{
			title: 'Financial Сalculator',
			author: 'Me',
			date: '19.09.2020',
			hover: true,
			class: 'first',
			a: 'http://kinko.epizy.com/indexOne.html',
			tags: 'Websites'

		},
		// {
		// 	title: 'Piroll',
		// 	author: 'Me',
		// 	date: '3.05.2019',
		// 	hover: false,
		// 	class: 'two',
		// 	a: 'http://kinko.epizy.com/'

		// },
		{
			title: 'Business website',
			author: 'Me',
			date: '24.07.2020',
			hover: false,
			class: 'three',
			a: 'http://kinko.epizy.com/three.html',
			tags: 'Websites'

		}, {
			title: 'Blog',
			author: 'Me',
			date: '12.09.2021',
			hover: false,
			class: 'four',
			a: 'https://blog-js-6a0bc.web.app',
			tags: 'SPA'

		}, {
			title: 'To Do List',
			author: 'Me',
			date: '10.12.2021',
			hover: false,
			class: 'five',
			a: 'https://kinkotodolist.web.app/',
			tags: 'SPA'



		}
	]
}