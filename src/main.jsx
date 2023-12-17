import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './index.css'
import { json } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);

function testDataFetch() {
  fetch('https://fakestoreapi.com/products/3')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

testDataFetch()
