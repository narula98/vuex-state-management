import filterProducts from '../../products/filter-products';
import StoreService from '../../services/store-service';

export default {
  namespaced: true,
  state() {
    return {
      products: null,
      cartItems: [],
    };
  },

  getters: {
    filteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
    calculatePrice(state) {
      return state.cartItems.reduce((curr, next) => curr + next.price, 0);
    },

  },

  mutations: {
    setCartItems(state, item) {
      state.cartItems = [...state.cartItems, item];
    },
    setProducts(state, products) {
      state.products = products;
    },
  },

  actions: {
    fetchProducts({ commit }) {
      return StoreService.fetchProducts().then((resp) => commit('setProducts', resp)).catch((e) => { throw new Error(e); });
    },
  },

};
