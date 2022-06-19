import Vue from "vue";
import Vuex from "vuex";
import data from "./data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    edit: { status: false, id: null },
    invoices: [...data],
    filter: [],
    columnStatus: ['Draft', 'Pending', 'Paid'],
    appView: 'col'
  },
  mutations: {
    SET_MENU_IS_OPEN(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    SET_EDIT(state, payload) {
      state.edit = { ...payload };
    },
    SET_INVOICES(state, payload) {
      state.invoices.push(payload);
    },
    SET_FILTER(state, payload) {
      state.filter = payload;
    },
    DELETE_INVOICE(state, payload) {
      state.invoices.splice(payload, 1);
    },
    MARK_INVOICE(state, payload) {
      state.invoices[payload].status = "Paid";
    },
    INVOICE_UPDATE(state, payload) {
      state.invoices.splice(payload.index, 1, { ...payload.info });
    },
    SET_APP_VIEW(state, payload) {
      state.appView = payload;
    }
  },
  actions: {},
  getters: {
    filteredOrders(state) {
      if (state.filter.length === 0) return state.invoices;
      else {
        let filtered = state.invoices.filter((item) =>
          state.filter.includes(item.status)
        );
        return filtered;
      }
    },
  },
});
