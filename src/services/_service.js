const { logPayload, logResponse } = require('../utils/log')

class HttpService {
  constructor(request) {
    this.request = request
  }

  async get(url, headers = {}) {
    logPayload(url, {})

    const response = await this.request.get(url, {
      headers
    })

    logResponse(url, await response.json())

    return response
  }

  async post(url, payload, headers = {}) {
    logPayload(url, payload)

    const response = await this.request.post(url, {
      headers: {
        Accept: '*/*',
        ...headers
      },
      data: payload
    })

    logResponse(url, await response.json())

    return response
  }

  async put(url, payload, headers = {}) {
    logPayload(url, payload)

    const response = await this.request.put(url, {
      headers: {
        Accept: '*/*',
        ...headers
      },
      data: payload
    })

    logResponse(url, await response.json())

    return response
  }

  async patch(url, payload, headers = {}) {
    logPayload(url, payload)

    const response = await this.request.patch(url, {
      headers: {
        Accept: '*/*',
        ...headers
      },
      data: payload
    })

    logResponse(url, await response.json())

    return response
  }

  async delete(url, payload, headers = {}) {
    logPayload(url, payload)

    const response = await this.request.delete(url, {
      headers: {
        Accept: '*/*',
        ...headers
      },
      data: payload
    })

    logResponse(url, await response.json())

    return response
  }
}

module.exports = { HttpService }
