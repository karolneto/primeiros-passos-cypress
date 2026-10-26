import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {


    it('login - Fail', () => {
   loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

   it('login - Success', () => {
   loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.confirmDashboardPage()
})

})
