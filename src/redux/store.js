import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reduser';

const middrewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middrewares));

export const persistor = persistStore(store);