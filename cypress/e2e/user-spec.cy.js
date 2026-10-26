import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
 loginPage.accessLoginPage()
 loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

 dashboardPage.confirmDashboardPage()

 menuPage.accessMyInfo()

 myInfoPage.fillPersonalInfos(chance.first(), "Benedito", chance.last(), "2002-26-06")
 myInfoPage.fillEmployeeInfos("0101", "0202", "03 03", "2000-04-03")
 myInfoPage.fillStatusInfos()
 myInfoPage.fillCustomFields("testezinho")
 myInfoPage.saveForm()
    }) 

})
