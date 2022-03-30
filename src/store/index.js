import Vue from 'vue'
import Vuex from 'vuex'
import { getFirestore, onSnapshot, query, addDoc, collection } from "firebase/firestore"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        motos: [],
    },

    mutations: {
        SET_MOTOS(state, motos) {
            state.motos = motos
        },
    },

    actions: {
        async agregar_Moto(context, moto) {
            const db = getFirestore()
            const coleccionMotos = collection(db, "motos")
            const docRef = await addDoc(coleccionMotos, moto);
            console.log(docRef.id)
        },
        async get_Motos({ commit }) {
            const db = getFirestore()
            const q = query(collection(db, "motos"));
            onSnapshot(q, (querySnapshot) => {
                const motos = [];
                querySnapshot.forEach((doc) => {
                    const moto = {
                        id: doc.id,
                        data: doc.data()
                    }
                    motos.push(moto);
                });
                commit("SET_MOTOS", motos)
            });
        },
    },

})