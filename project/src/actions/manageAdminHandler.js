import Constants from '../constants/constants';
import  data from '../admins.json';

export const addEditAdmin = (adminList) => {
    return (dispatch) => {
        dispatch({
          type:Constants.ON_ADMIN_ADD_EDIT,
          payload:adminList
        });
    }
};

export const getAdminList = () => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const adminList = data.adminList;
            dispatch({
                type: Constants.ON_ADMIN_RECIEVED,
                payload: adminList
            });
        });
    };
};