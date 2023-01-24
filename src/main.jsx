import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import '@fontsource/roboto'
import './assets/styles/reset.css'
import './assets/styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
