import Constants from '../constants/constants';

export const addEditAdmin = (adminList) => {
    return (dispatch) => {
        dispatch({
          type:Constants.ON_ADMIN_ADD_EDIT,
          payload:adminList
        });
    }
};