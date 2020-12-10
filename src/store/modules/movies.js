import axios from '@/plugins/axios';

const moviesSrore ={
	namespaced: true,
	state:{},
	getters:{},
	mutations:{},
	actions:{
		async fetchMovies(context) {
			console.log(context);
			const response = await axios.get("/?i=tt0111161");
			console.log(response);
		}
	},
};

export default moviesSrore;	