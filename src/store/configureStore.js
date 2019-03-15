import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

export default function configureStore() {
  try {
    const composeEnhancer = typeof window === 'object'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options
      }) : compose

    const enhancer = composeEnhancer(applyMiddleware(thunk))

    return createStore(rootReducer, enhancer)
  } catch (e) {
    console.log(e)
    return e
  }
}
