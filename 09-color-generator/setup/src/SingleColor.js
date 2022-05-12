import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'


const SingleColor = ({ rgb, weight, type, index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(', ')
  const hex = rgbToHex(rgb)

  const copyToClipboard = async e => {
    setAlert(true)
    const copied = await navigator.clipboard.writeText(hex)

    return await copied
  }

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => {
      clearTimeout(alertTimeout)
    }
  }, [alert])

  return (
    <article className={`color ${(type === "shade") ? "color-light" : ""}`}
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{ weight }%</p>
      <p className="color-value">{ hex }</p>
      {
        alert ? <p className="alert">{ hex } Copied to clipboard</p> : null
      }
    </article>
  )
}


export default SingleColor
