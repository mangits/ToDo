import React from 'react';
import App from './App.js'
import './Welcome.css'

function Welcome ({username}) {
  return (
    <h1>
    Welcome {username}!
    </h1>
  )
}

export default Welcome;