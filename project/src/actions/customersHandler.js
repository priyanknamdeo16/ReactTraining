import Constants from '../constants/constants';

export const getCustomers = () => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const emps = [
                {
                    id: 1,
                    name: 'Virat Kohli',
                    salary: 1000
                },
                {
                    id: 2,
                    name: 'Sachin Tendulkar',
                    salary: 2000
                },
                {
                    id: 3,
                    name: 'Yuvraj Singh',
                    salary: 3000
                },
                {
                    id: 4,
                    name: 'MSD',
                    salary: 4000
                }
            ];
            dispatch({
                type: Constants.ON_CUSTOMERS_RECIEVED,
                payload: emps
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
export const addEditCustomer = (customer) => {
    return (dispatch) => {
  
      dispatch({type:Constants.ON_CUSTOMER_ADD_EDIT, payload:customer});
  
        const customers = [];
        customers.push(customer.customer);
        dispatch({
          type:Constants.ON_CUSTOMERS_RECIEVED,
          payload:customers
        });
    }
};
