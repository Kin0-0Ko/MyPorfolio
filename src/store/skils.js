export default {
	namespaced: true,
	state: {
		pBars: [
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
		boosts: [
			{
				icon: 'rocket' ,
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
				icon:'location-arrow',
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


			},
			// {
			// 	icon: 'book',
			// 	h: 'Neque porro quisquam est qui',
			// 	desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
			// 	active: false,
			// 	color: 'gray'

			// },
		],
	},
	getters: {
		all: state => state.pBars,
		boosts: state => state.boosts,
	},
	mutations: {

		setActive(state, boost){
			if(boost.active){
				boost.active = false;
				boost.color = 'gray';
			}else{
				boost.active = true;
				boost.color = 'red';

			}

		},
		markActive(state, boost){
			let a = ''
			if(boost.active){
				a = 'active';
			}
			return a
		}


	},
	actions: {

		setActive(store, boost){
			store.commit('setActive', boost);
		},
		markActive(store, boost){
			store.commit('markActive', boost)
		}

	}
}
