import { createStore } from 'redux'
import { combineReducers } from "redux"
import { userLogged } from '../reducers/userLogged'

const allReducers = combineReducers({
    userLogged
})

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())