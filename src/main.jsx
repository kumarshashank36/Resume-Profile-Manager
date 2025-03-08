import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.jsx'     // from react
import Mystore from './store.jsx'     // from redux
import { Provider } from 'react-redux'    // react-redux

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={Mystore}>  
    <App />
    </Provider>

  </StrictMode>,
)
