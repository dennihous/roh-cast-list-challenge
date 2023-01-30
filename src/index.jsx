import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { getData } from './get-data.js'

const App = () => {
  const [data, setData] = useState({})

  getData()
    .then(d => setData(d))

  

  return (
    <div>
    <h1>{data.title ?? 'unknown'}</h1>
    <h3>{data.date ?? 'unknown'}</h3>
    <h3>{data.shortDescription ?? 'unknown'}</h3>
    <h1>Creatives</h1>
    <h3>
      {data.creatives}
    </h3>
    <h1>Cast</h1>
    <h3>{data.cast}</h3>
    </div>
  )
}

const root = createRoot(
  document.getElementById('app-root')
)

root.render(<App />)
