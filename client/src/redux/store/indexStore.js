import {  createStore,applyMiddleware} from 'redux';
//import { legacy_createStore as createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from '../reducer/indexReducer';

export const store = createStore( RootReducer , composeWithDevTools(applyMiddleware(thunk)));

