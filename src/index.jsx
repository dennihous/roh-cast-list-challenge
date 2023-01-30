import React, { useState } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { getData } from './get-data.js'

const App = () => {
  const [data, setData] = useState({})

  getData()
    .then(d => setData(d))

  

  return (
    <div className='index'>
    <h1>{data.title ?? 'unknown'}</h1>
    <h3>{data.date ?? 'unknown'}</h3>
    <h3>{data.shortDescription ?? 'unknown'}</h3>
    <h2>Creatives</h2>
    {data.creatives && (
    <ul>
      {data.creatives.map(e => (
        <li>{e}</li>
      ))}
    </ul>
    )}
    <h1>Cast</h1>
    {data.cast && (
    <ul>
      {data.cast.map(e => (
        <li>{e}</li>
      ))}
    </ul>
    )}
    </div>
  )
}

const root = createRoot(
  document.getElementById('app-root')
)

root.render(<App />)
