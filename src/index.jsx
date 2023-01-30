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
    <div>Hello world</div>
    </div>
  )
}

const root = createRoot(
  document.getElementById('app-root')
)

root.render(<App />)
