import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true)

    await fetch(url)
            .then(response => response.json())
            .then(result => {
              // console.log(result)
              setTours(result)
            })
            .catch(err => console.log(err))

    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)

    setTours(newTours)
  }

  return (
    <main>
    {
      isLoading
      ?
        <Loading />
      :
        (tours.length)
          ?
            <Tours tours={tours} removeTour={removeTour} />
          :
            <div>
              <h2>No tours left</h2>
              <button className="btn" onClick={fetchTours}>Get tours</button>
            </div>
    }
    </main>
  )
}


export default App
