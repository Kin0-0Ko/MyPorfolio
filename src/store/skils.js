export default {
	namespaced: true,
	state: {
		pBars: [ //setting for progres bars components
			{
				progress: 75,
				color: '#ca3c3c',
				line: 'butt',
				thickness: '7%',
				emptyColor: '#cccccc'
			},
			{
				progress: 25,
				color: '#ca3c3c',
				line: 'butt',
				thickness: '7%',
				emptyColor: '#cccccc'
			},
			{
				progress: 75,
				color: '#ca3c3c',
				line: 'butt',
				thickness: '7%',
				emptyColor: '#cccccc'
			},
			{
				progress: 50,
				color: '#ca3c3c',
				line: 'butt',
				thickness: '7%',
				emptyColor: '#cccccc'
			}
		],
		boosts: [ //info for boosts
			{
				icon: 'rocket',
				h: 'Execution speed',
				desc: 'For an additional fee, you can speed up the work	(within reasonable limits)',
				active: true,
				color: 'red'
			},
			{
				icon: 'unlock',
				h: 'Edits',
				desc: 'Corrections of the already agreed terms of reference are paid. (After 2 edits)',
				active: false,
				color: 'gray'


			},
			{
				icon: 'location-arrow',
				h: 'Prepaid expense',
				desc: ' Advance payment is 50 % of the order price ',
				active: false,
				color: 'gray'
			},
			{
				icon: 'phone-alt',
				h: 'Communication',
				desc: 'Communication takes place through your chosen method',
				active: false,
				color: 'gray'


			}
		],
	},
	getters: {
		all: state => state.pBars, // get array of settings p-bars
		boosts: state => state.boosts, // get array of boosts
	},
	mutations: {

		setActive(state, boost) { //make boost active
			if (boost.active) {
				boost.active = false;
				boost.color = 'gray';
			} else {
				boost.active = true;
				boost.color = 'red';

			}

		},


	},
	actions: {

		setActive(store, boost) {
			store.commit('setActive', boost);
		}

	}
}