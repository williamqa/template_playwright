function logPayload(endpoint, payload) {
  console.log(`\n--> PAYLOAD ${endpoint}\n` + JSON.stringify(payload, null, 2))
}

function logResponse(endpoint, response) {
  console.log(
    `\n<-- RESPONSE ${endpoint}\n` + JSON.stringify(response, null, 2)
  )
}

module.exports = { logPayload, logResponse }
