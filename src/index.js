import react from 'react'
import ReactDom from 'react-dom/client'
import HomePage from './HomePage'
import '../src/style.css'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <HomePage />
)