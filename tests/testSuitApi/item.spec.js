const { test } = require('../../src/config/test')
const { authHook } = require('../../src/utils/hooks/auth')
const { ItemService } = require('../../src/services/item')
const { schemaValidation } = require('../../src/utils/asserts/schema')
const itemSchemas = require('../../src/config/data/schemas/item_schemas')

let item

test.describe('@tag test suit api', () => {
  test('test name', async ({ request, data }) => {
    const auth = await authHook(request)
    const itemService = new ItemService(request)

    const payload = data.item.createItem

    const response = await itemService.createItem(auth, payload)

    await expect(response).toBeOK()

    const responseBody = await response.json()

    expect(responseBody.data.owner.establishment).toEqual(
      data.item.createItem.owner.establishment
    )

    const schemaAsObject = itemSchemas.postItemSchema

    const valid = schemaValidation(schemaAsObject, responseBody)

    expect(valid).toEqual(true)

    item = responseBody.data
  })

})
