import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reduser';

const middrewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middrewares));

export default store;