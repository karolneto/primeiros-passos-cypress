import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']", 
  passwordField: "[name='password']", 
  loginButton: "[type='submit']", 
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  midleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active"
}

  it.only('User info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Karoline")
    cy.get(selectorsList.midleNameField).clear().type("Sperandio Pimenta")
    cy.get(selectorsList.lastNameField).clear().type("Neto")
    cy.get(selectorsList.genericField).eq(3).clear().type("3109")
    }) 

    it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
