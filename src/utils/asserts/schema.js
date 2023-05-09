const Ajv = require('ajv')

function schemaValidation(schemaAsObject, responseBody) {
  const ajv = new Ajv({ allErrors: true })

  const valid = ajv.validate(schemaAsObject, responseBody)
  if (!valid) {
    console.log(`Erros in Schema: /n` + ajv.errors)
  }

  return valid
}

module.exports = { schemaValidation }
