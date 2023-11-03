import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Domestic from './components/domesticboxoffice.jsx'
import Critic from './components/criticvsaudiencescore.jsx'
import Genres from './components/genresandtotalgross.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Domestic />
    <Genres />
    <Critic />
  </React.StrictMode>,
)
