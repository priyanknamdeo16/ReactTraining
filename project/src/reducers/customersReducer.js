import Constants from '../constants/constants';

const initialState = {
    customerList : [],
    selectedCustomer: null,
    showAddForm: false
}

export default CreateReducers(initialState, {
    [Constants.ON_CUSTOMERS_RECIEVED] : (state, payload) => {
        return Object.assign({},state,{customerList:payload});
    },
    [Constants.ON_CUSTOMERS_UPDATED] : (state, payload) => {
    },
    [Constants.ON_CUSTOMERS_DELETED] : (state, payload) => {
    },
    [Constants.ON_CUSTOMERS_SELECTED]: (state, payload) => {
        return Object.assign({}, state, {selectedCustomer: payload})
    },
    [Constants.ON_CUSTOMERS_ADD]: (state, payload) => {
        return Object.assign({}, state, {showAddForm: payload, selectedCustomer: null})
    }
});

function CreateReducers(initialState, reducerMap){
    return (state = initialState, action = {}) => {
        const reducer = reducerMap[action.type];
        return reducer ? reducer(state, action.payload) : state;
    }
}
