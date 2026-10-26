class MyInfoPage {
    selectorsList() {
       const selectors = {
           firstNameField: "[name='firstName']",
           midleNameField: "[name='middleName']",
           lastNameField: "[name='lastName']",
           genericField: ".oxd-input--active",
           dateField: "[placeholder='yyyy-dd-mm']",
           dataCloseButton: ".--close",
           submittButon: "[type='submit']",
           genericComboBox: "[tabindex='0']",
           nacionalittyButton: ".oxd-select-dropdown",
           MaritalStatusButton: ".oxd-select-dropdown"
        }
     return selectors
}

fillPersonalInfos(firstName, midleName, lastName, dateOfBirth) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().midleNameField).clear().type(midleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth)
    cy.get(this.selectorsList().dataCloseButton).click()
}

fillEmployeeInfos(employeeId, otherId, driversLicense, driversLicenseDate) {
    cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
    cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
    cy.get(this.selectorsList().dataCloseButton).click()
}

fillStatusInfos() {
    cy.get(this.selectorsList().genericComboBox).eq(0).click()
    cy.get(this.selectorsList().nacionalittyButton).contains("Portuguese").click()
    cy.get(this.selectorsList().genericComboBox).eq(1).click()
    cy.get(this.selectorsList().MaritalStatusButton).contains("Single").click()
}

fillCustomFields(testField) {
    cy.get(this.selectorsList().genericField).eq(9).clear().type(testField)
}


saveForm() {
    cy.get(this.selectorsList().submittButon).eq(0).click()
    cy.get("body").should("contain", "Successfully Updated")
}

}

export default MyInfoPage