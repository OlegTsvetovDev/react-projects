import React, { useState, createContext, useContext, useEffect, useCallback } from 'react'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback(async () => {
    setLoading(true)

    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const drinks = data.drinks
      if (drinks === null) setCocktails([])
      if (drinks) {
        const newDrinks = drinks.map(drink => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink

          return {id: idDrink, name: strDrink, img: strDrinkThumb, info:strAlcoholic, glass:strGlass}
        })

        setCocktails(newDrinks)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])

  // useEffect(() => {
  //   console.log(cocktails)
  // }, [cocktails])

  const appState = {
    loading,
    setSearchTerm,
    cocktails,
    fetchDrinks,
  }

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}


export { AppContext, AppProvider, useGlobalContext }
