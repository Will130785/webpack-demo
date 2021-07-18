function getComponent () {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  // Lodash now imported
  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div')

      element.innerHTML = _.join(['Hello', 'webpack'], ' ')

      return element
    })
    .catch((err) => 'An error occurred while loading the component')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  element.appendChild(btn)

  return element
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
