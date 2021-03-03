import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import { loginReducer } from './Redux/Rerducers/LoginReducer';
import rootReducer from './Redux/RootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store