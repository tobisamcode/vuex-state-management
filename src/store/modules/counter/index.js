import counterMutation from './mutations';
import counterAction from './actions';
import counterGetters from './getters';


export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutation,
    actions: counterAction,
    getters: counterGetters
};