import Constants from "../constants/constants";
import { createReducer } from "../utils/utils";

const initialState = {
  customerList: [],
  selectedCustomer: null,
  showAddForm: false
};

export default createReducer(initialState, {
  [Constants.ON_CUSTOMERS_RECIEVED]: (state, payload) => {
    return Object.assign({}, state, { customerList: payload });
  },
  [Constants.ON_CUSTOMERS_UPDATED]: (state, payload) => {},
  [Constants.ON_CUSTOMERS_DELETED]: (state, payload) => {},
  [Constants.ON_CUSTOMERS_SELECTED]: (state, payload) => {
    return Object.assign({}, state, { selectedCustomer: payload });
  },
  [Constants.ON_CUSTOMERS_ADD_EDIT]: (state, payload) => {
    // const newList = Object.assign({}, state.customerList);
    // newList.push(payload);
    // console.log(newList);
    return Object.assign({}, state, {
      customerList: payload,
      selectedCustomer: null
    });
  }
});
