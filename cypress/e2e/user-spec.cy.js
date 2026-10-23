import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  
}

  it.only('User info Update - Success', () => {
 loginPage.accessLoginPage()
 loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

 dashboardPage.confirmDashboardPage()

 menuPage.accessMyInfo()
 
 myInfoPage.fillMyInfoPage()
 myInfoPage.saveMyInfoLogin()
    }) 

    it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
