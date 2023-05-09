const { HttpService } = require('./_service')

class ItemService extends HttpService {
  constructor(request) {
    super(request)
  }

  async createItem(auth, payload) {
    return this.post(
      `${CONFIG_ENV.baseUrl}/your/api/url`,
      payload,
      {
        ...auth
      }
    )
  }

  async getItem(auth, id) {
    return this.get(`${CONFIG_ENV.baseUrl}/your/api/url/${id}`, {
      ...auth
    })
  }

  async updateItem(auth, payload, id) {
    return this.put(
      `${CONFIG_ENV.baseUrl}/your/api/url/${id}`,
      payload,
      {
        ...auth
      }
    )
  }

  async updatePartItem(auth, payload, id) {
    return this.patch(
      `${CONFIG_ENV.baseUrl}/your/api/url/${id}`,
      payload,
      {
        ...auth
      }
    )
  }

  async deleteItem(auth, payload, id) {
    return this.delete(
      `${CONFIG_ENV.baseUrl}/your/api/url/${id}`,
      payload,
      {
        ...auth
      }
    )
  }
}

module.exports = { ItemService }
