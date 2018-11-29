import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const initialState = {}
const middleware = [thunk]
const dt = (window as any).__REDUX_DEVTOOLS_EXTENSION__
let enhancers = applyMiddleware(...middleware)
if (dt) {
    console.log('inserting support for REDUX dubugging')
    enhancers = compose(enhancers, dt())
} else {
    console.log('No support for REDUX debugging')
}

const store = createStore(
    rootReducer,
    initialState,
    enhancers
)

export default store
