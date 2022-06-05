import React, { useState, useEffect, useCallback } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


const SingleCocktail = () => {
  const { setSearchTerm } = useGlobalContext()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState({})

  const fetchData = useCallback(async () => {
    setLoading(true)

    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      const cocktail = data.drinks[0]

      if (cocktail) {
        const {
          strDrink: name,
          strDrinkThumb: img,
          strAcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1: ingredient1,
          strIngredient2: ingredient2,
          strIngredient3: ingredient3,
          strIngredient4: ingredient4,
          strIngredient5: ingredient5,
        } = cocktail

        const ingredients = [
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
          ingredient5,
        ]

        const newCocktail = {name, img, info, category, glass, instructions, ingredients}
        setCocktail(newCocktail)
      }

      if (cocktail === null) setCocktail({})
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleClick = () => {
    setSearchTerm('')
  }

  if (loading) return <Loading />

  const emptyCocktails = cocktail
    && Object.keys(cocktail).length === 0
    && Object.getPrototypeOf(cocktail) === Object.prototype

  if (emptyCocktails) return <h2 className="section-title">No cocktails to display</h2>

  const { name, img, info, category, glass, instructions, ingredients } = cocktail

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary"
        onClick={handleClick}
      >Return back</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} className="image" />
        <div className="drink-info">
          <p><span className="drink-data">Name:</span> {name}</p>
          <p><span className="drink-data">Category:</span> {category}</p>
          <p><span className="drink-data">Info:</span> {info}</p>
          <p><span className="drink-data">Glass:</span> {glass}</p>
          <p><span className="drink-data">Instructions:</span> {instructions}</p>
          <p><span className="drink-data">Ingredients:</span>
            {
              ingredients.map((ingredient, i) =>
                ingredient ? <span key={i}>{ingredient}</span> : null
              )
            }
          </p>
        </div>
      </div>
    </section>
  )
}


export default SingleCocktail
