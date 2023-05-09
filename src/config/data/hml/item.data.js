// In this file set global variables of homolog ambient
const { faker } = require('@faker-js/faker')

module.exports = {
  createItem: {
    owner: {
      user: `Playwright ${faker.name.findName()}`,
      master: '',
      company: 'your company',
      group: '',
      establishment: 'API Playwright Automation'
    },
    itemType: '',
    description: '',
    unity: '',
    complement: faker.name.findName(),
    status: 'active'
  }
}
