import fs from 'fs'
import fetch from 'node-fetch';

const url = 'https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban'

fetch(url)
  .then(response => {
    response.json().then(data => {
      console.log('keys', Object.keys(data))
      console.log('data', data.data)
      console.log('included', data.included.length)
      fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
      // console.log('keys', Object.keys(data))
      // console.log('data', JSON.stringify(data.data, null, 2))
      // console.log('included', data.included[0])

      const title = data.data.attributes.title
    })
  })