import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import router from './router'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      {router}
    </HashRouter>
  </React.StrictMode>,
)
