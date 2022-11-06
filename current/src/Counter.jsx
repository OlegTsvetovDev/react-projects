import React, { useReducer } from 'react'
import ACTIONS from './Actions'


function reducer(state, action) {
  let newState = {}

  switch (action.type) {
    case ACTIONS.INCREMENT:
      newState.count = state.count++
      break;
    case ACTIONS.DECREMENT:
      newState.count = state.count--
      break;
    default: newState.count = state.count
  }

  return newState
}

const initialState = {
  count: 0,
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => dispatch({ type: ACTIONS.INCREMENT })

  const decrement = () => dispatch({ type: ACTIONS.DECREMENT })


  return (
    <>
      <h2>Counter: </h2>
      <button onClick={ decrement }>-</button>
      <span>{ state.count }</span>
      <button onClick={ increment }>+</button>
    </>
  )
}


export default Counter
