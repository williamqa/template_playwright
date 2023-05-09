class Page {
  constructor(page, path, baseUrl = CONFIG_ENV.baseUrl) {
    this.page = page
    this.path = path
    this.baseUrl = baseUrl
  }

  async goto() {
    await this.page.goto(this.path)
  }

  async load() {
    const url = `${this.baseUrl}${this.path}`
    const currentUrl = this.page.url().split('?')[0]

    if (currentUrl !== url)
      await this.page.waitForNavigation({
        url
      })
  }

  locator(locator) {
    return this.page.locator(locator)
  }
}

module.exports = { Page }
