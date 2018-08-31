import Constants from '../constants/constants';
import {createReducer} from '../utils/utils';

const initialState = {
    tabIndex: 0
}
export default createReducer(initialState, {
    [Constants.ON_TAB_CHANGE]: (state, payload) => {
        return Object.assign({},state,{tabIndex:payload});
    }
});