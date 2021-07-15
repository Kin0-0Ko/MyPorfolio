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
				h: 'Totam rem aperiam eaque',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				active: true,
				color: 'red'
			},
			{
				icon: 'unlock',
				h: 'Nemo enim ipsam voluptatem',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				active: false,
				color: 'gray'


			},
			{
				icon:'location-arrow',
				h: 'Ut enim ad minima veniam' ,
				desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				active: false,
				color: 'gray'
			},
			{
				icon: 'phone-alt',
				h: 'Quis nostrum exercitationem ullam',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				active: false,
				color: 'gray'


			},
			{
				icon: 'book',
				h: 'Neque porro quisquam est qui',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				active: false,
				color: 'gray'

			},
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
