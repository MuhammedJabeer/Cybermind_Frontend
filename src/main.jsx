import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {JobModalProvider} from './context/Jobcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobModalProvider>
          <App />
    </JobModalProvider>
  </StrictMode>,
)
