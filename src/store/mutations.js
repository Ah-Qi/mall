import { ADD_COUNTER,ADD_TO_CART } from './mutation_types'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.check = true;
    state.Cart.push(payload);
  }
}