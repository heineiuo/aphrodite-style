import prefixAll from 'inline-style-prefixer/static'
import isPlainObject from 'lodash/isPlainObject'

export default (...styleDefinitions) => {
  const plainStyles = [{}].concat(styleDefinitions).reduce((left, right) => {
    return Object.assign({}, left, isPlainObject(right) ? 
      right.hasOwnProperty('_definition') ? right._definition : right : {}
    )
  })
  return prefixAll(plainStyles)
}
