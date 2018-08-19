import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({

})

const composeEnhanceres = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhanceres(
        applyMiddleware(thunk)
    )
)