import { combineReducers } from "redux";
import { addContentReducer } from './addContentReducer';
import { pathReducer } from './pathReducer';
import { newValueReducer } from './newValueReducer';

export const rootReducer = combineReducers({
    addContentReducer,
    pathReducer,
    newValueReducer,
})
