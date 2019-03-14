import Constants from '../constants/constants';
import {createReducer} from '../utils/utils';

const manageAdminData ={
    adminList: []
}

export default createReducer(manageAdminData, {
    [Constants.ON_ADMIN_RECIEVED]: (state, payload) => {
        return Object.assign({}, state, { adminList: payload });
      },
    [Constants.ON_ADMIN_ADD_EDIT]: (state, payload) => {
        return Object.assign({}, state, {
            adminList: payload
        })
    }
});