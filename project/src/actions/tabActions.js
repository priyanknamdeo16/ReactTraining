import Constants from '../constants';

export const tabChange = (index) => {
    return (dispatchEvent, getState) => {
        dispatchEvent({
            type: Constants.ON_TAB_CHANGE,
            payload: index
        })
    }
}