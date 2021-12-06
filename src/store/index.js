import { createStore } from "vuex";
import MemesService from "@/services/MemesService";

export default createStore({
	state: {
		titleApp: "Memes App",
		memes: [],
	},
	mutations: {
		async setMemes(state, payload) {
			state.memes = payload;
		},
	},
	actions: {
		async getMemes({ commit }, params) {
			try {
				const response = await MemesService.getAll();

				if (!response.success) {
					return;
				}

				if (!params?.total) {
					commit("setMemes", response.data.memes);
				} else {
					const resultTemp = [];

					response.data.memes.forEach((meme, index) => {
						if (index < params.total) resultTemp.push(meme);
					});

					commit("setMemes", resultTemp);
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
