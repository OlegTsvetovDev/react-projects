import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
let initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => dispatch({type: 'CLEAR_CART'})
  const removeItem = id => dispatch({type: 'REMOVE_ITEM', payload: id})
  const increaseAmount = id => dispatch({type: 'INCREASE_AMOUNT', payload: id})
  const decreaseAmount = id => dispatch({type: 'DECREASE_AMOUNT', payload: id})

  const fetchData = async () => {
    dispatch({type: 'LOADING'})

    try {
      const response = await fetch(url)
      const cart = await response.json()
      dispatch({type: 'SHOW_ITEMS', payload: cart})
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}


export { useGlobalContext, AppContext, AppProvider }
