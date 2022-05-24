const reducer = (state, action) => {
  const type = action.type

  if (type === 'LOADING')
    return {...state, loading: true}

  if (type === 'SHOW_ITEMS')
    return {...state, cart: action.payload, loading: false}


  if (type === 'CLEAR_CART')
    return {...state, cart: []}

  if (type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter(item =>
      item.id !== action.payload
    )

    return {...state, cart: newCart}
  }

  if (type === 'INCREASE_AMOUNT') {
    const newCart = state.cart.map(item => {
      if (item.id === action.payload)
        return {...item, amount: item.amount + 1}
      return item
    })

    return {...state, cart: newCart}
  }

  if (type === 'DECREASE_AMOUNT') {
    const newCart = state.cart.map(item => {
      if (item.id === action.payload) {
        let newAmount = item.amount - 1
        newAmount = (newAmount < 0) ? 0 : newAmount
        return {...item, amount: newAmount}
      }
      return item
    })

    return {...state, cart: newCart}
  }

  if (type === 'GET_TOTALS') {
    const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem
      const newCartTotal = {
        total: cartTotal.total + price * amount,
        amount: cartTotal.amount + amount
      }

      return newCartTotal
    }, {total: 0, amount: 0} )

    return {...state, total: Math.round(total * 100) / 100, amount}
  }

  console.log('Wrong action')
  return state
}


export default reducer
