import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppWrapper from './AppWrapper'
import Routes from './Routes'
import store from './store'

import 'localization'
import 'styles/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppWrapper>
  </Provider>,
  document.getElementById('root')
)
