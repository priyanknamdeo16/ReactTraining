// To combine all reducers
import { combineReducers } from 'redux';
import customers from './customersReducer';


export default combineReducers({
    customers
});
