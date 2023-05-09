async function authHook(request) {
  const payload = {
    apiToken: ''
  }

  const response = await request.post(`${CONFIG_ENV.authBaseUrl}`, {
    data: payload
  })

  await expect(response).toBeOK()

  const responseBody = await response.json()

  expect(responseBody).toHaveProperty('data')
  expect(responseBody.data.token).toBeTruthy()

  return { Authorization: responseBody.data.token }
}

module.exports = { authHook }
