import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import 'babel-polyfill'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import configureStore from './store/configureStore'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const store = configureStore()
// TODO implement history
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path='/' component={App} />
    </Router>
    {/* <App /> */}
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
