import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    setLoading(true)
    const response = await fetch(url)
    const newJobs = await response.json()

    setJobs(newJobs)
    setLoading(false)
    console.log(newJobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    )
  }

  const { title, dates, duties, company } = jobs[value]

  const handleClick = i => {
    setValue(i)
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((job, i) =>
              <button
                key={job.id}
                className={ `job-btn${(i === value) ? ' active-btn' : ''}` }
                onClick={() => handleClick(i)}
              >
                {job.company}
              </button>
            )
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty, i) => {
              return (
                <div key={i} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>
  )
}


export default App
