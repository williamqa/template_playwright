const { Page } = require('./_page')

class DashboardPage extends Page {
  constructor(page) {
    super(page, '/dashboard')

    this.h2Title = this.locator('[data-id="b6ea632"] h2')
  }

  async validateTitle(title) {
    await expect(this.h2Title).toHaveText(title)
  }
}

module.exports = { DashboardPage }
