import React, { useState, useReducer } from 'react'
import './App.css'
import Counter from './Counter'
import Todos from './Todos'


function App() {
  return (
    <div className="App">
      <Counter /> 
      <Todos />
    </div>
  )
}


export default App
