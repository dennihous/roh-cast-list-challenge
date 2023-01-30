const url = 'https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban'

export const getData = async () => {
  const response = await fetch(url)
  const data = await response.json()
  // console.log('data', data.data)
  // console.log('included', data.included.slice(0, 5))
  const types = []

  for (const inc of data.included) {
    // console.log('inc', inc.type)
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
  const shortDescription = data.data.attributes.shortDescription.slice(3,-4)
  const creativeObjects = data.included.filter(i => i.type === 'creatives')
  const creatives = creativeObjects.map(c => `${c.attributes.name} - ${c.attributes.role}`)
  const castObjects = data.included.filter(i => i.type === 'castRoles')
  const cast = castObjects.map(c => `${c.attributes.name} - ${c.attributes.role}`)

  // console.log(title,
  //   date,
  //   shortDescription,
  //   creatives,
  //   castObjects,
  //   cast
  //   )

  return {
    title,
    date,
    shortDescription,
    creatives,
    cast
  }

  
}

getData()
