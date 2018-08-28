import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers';

export default () => {
  const middleWares = applyMiddleware(thunk,logger);
  const store = createStore(
      rootReducer,
      middleWares
  );
  return store;
}
