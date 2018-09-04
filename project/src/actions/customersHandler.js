import Constants from '../constants/constants';
import  data from '../customers.json';

export const getCustomers = () => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const customers = data.customerList;
            dispatch({
                type: Constants.ON_CUSTOMERS_RECIEVED,
                payload: customers
            });
        });
    };
};

export const onCustomersSelected = (customer) => {
    return (dispatch, getState) => {
        dispatch({
            type: Constants.ON_CUSTOMERS_SELECTED,
            payload: customer
        });
    }
};

export const onFormAdd = () => {
    return (dispatch, getState) => {
        dispatch({
            type: Constants.ON_FORM_ADD,
            payload: true
        });
    }
};
export const addEditCustomer = (customerList) => {
    return (dispatch) => {
        dispatch({
          type:Constants.ON_CUSTOMERS_ADD_EDIT,
          payload:customerList
        });
    }
};
