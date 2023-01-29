import fetch from 'node-fetch';

const url = 'https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban'

fetch(url)
  .then(response => response.json())
  .then(data => {
    const types = []

      for (const inc of data.included) {
        if (!types.map(t => t.type).includes(inc.type)) {
          types.push(inc)
        }
      }

      console.log('types', types)

      const title = data.data.attributes.title
      const activity = data.included.find(i => i.type === 'activities')
      const dateString = activity.attributes.date
      const dateObject = new Date(dateString)
      const date = [
        dateObject.getDate(),
        dateObject.getMonth() + 1,
        dateObject.getFullYear()
      ].join('/')
      const shortDescription = data.data.attributes.shortDescription
      const creativeObjects = data.included.filter(i => i.type === 'creatives')
      const creatives = creativeObjects.map(c => `${c.attributes.name} - ${c.attributes.role}`)

      console.log({ title, date, shortDescription, creatives })
    })