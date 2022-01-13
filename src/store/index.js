import { createStore } from 'vuex';

import rootMutation from './mutations';
import rootGetters from './getters';
import rootAction from './actions';
import counterModule from './modules/counter/index';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: rootMutation,
    actions: rootAction,
    getters: rootGetters
});

export default store;