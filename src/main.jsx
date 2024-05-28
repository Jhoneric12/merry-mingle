import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkModeContext from './Contexts/DarkModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContext>
      <App />
    </DarkModeContext>
  </React.StrictMode>,
)
