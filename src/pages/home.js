const { Page } = require('./_page')

const { HeaderComponent } = require('../components/header')

class HomePage extends Page {
  constructor(page) {
    super(page, '/')

    this.header = new HeaderComponent(page)

    this.buttonDashboard = this.locator('div[data-id="ea82be0"] a')
  }

  async accessDashboard() {
    await this.buttonDashboard.click()
  }
}

module.exports = { HomePage }
