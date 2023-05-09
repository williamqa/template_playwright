const { test } = require('../../src/config/test')

const { HomePage } = require('../../src/pages/home')
const { DashboardPage } = require('../../src/pages/dashboard')

test.describe.configure({ mode: 'parallel' })

test.describe('@tag test suit name', () => {
  test('@tag name test', async ({
    page,
    data
  }) => {
    const homePage = new HomePage(page)
    await homePage.goto()
    await homePage.accessDashboard()

    const dashboardPage = new DashboardPage(page)
    await dashboardPage.load()
    await dashboardPage.validateTitle(data.dashboard.page.title)
  })
})
