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
    <h1 className='title'>{data.title ?? 'unknown'}</h1>
    <h4 className='subtitle'>Date: {data.date ?? 'unknown'}</h4>
    <h4 className='subtitle'>{data.shortDescription ?? 'unknown'}</h4>
    <h2 className='title'>Creatives</h2>
    {data.creatives && (
    <ul>
      {data.creatives.map(e => (
        <li>{e}</li>
      ))}
    </ul>
    )}
    <h2 className='title'>Cast</h2>
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
