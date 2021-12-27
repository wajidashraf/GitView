import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import searchReducer from './reducers/searchReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
   userReducer,
searchReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store