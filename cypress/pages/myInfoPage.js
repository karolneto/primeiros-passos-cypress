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

fillMyInfoPage() {
    cy.get(this.selectorsList().firstNameField).clear().type("teste")
    cy.get(this.selectorsList().midleNameField).clear().type("grande")
    cy.get(this.selectorsList().lastNameField).clear().type("teste")
    cy.get(this.selectorsList().genericField).eq(3).clear().type("3109")
    cy.get(this.selectorsList().genericField).eq(4).clear().type("3109")
    cy.get(this.selectorsList().genericField).eq(5).clear().type("3109")
    cy.get(this.selectorsList().dateField).eq(0).clear().type("2026-10-22")
    cy.get(this.selectorsList().dataCloseButton).click()
    cy.get(this.selectorsList().dateField).eq(1).clear().type("2002-06-26")
    cy.get(this.selectorsList().dataCloseButton).click()
    cy.get(this.selectorsList().genericField).eq(8).clear().type("3109")
    cy.get(this.selectorsList().genericComboBox).eq(0).click()
    cy.get(this.selectorsList().nacionalittyButton).contains("Iraqi").click()
    cy.get(this.selectorsList().genericComboBox).eq(1).click()
    cy.get(this.selectorsList().MaritalStatusButton).contains("Single").click()
}

saveMyInfoLogin() {
    cy.get(this.selectorsList().submittButon).eq(0).click()
    cy.get("body").should("contain", "Successfully Updated")
}

}

export default MyInfoPage