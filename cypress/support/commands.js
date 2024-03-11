// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require("@testing-library/cypress/add-commands")

Cypress.Commands.add("addChartTitleAndLabels", (title, xLabel, yLabel) => {
  cy.findByLabelText("Chart title").type(title)
  cy.findByLabelText("X label").type(xLabel)
  cy.findByLabelText("Y label").type(yLabel)
})

Cypress.Commands.add("addFirstDataPoint", (x, y) => {
    cy.findByLabelText("X").type(x)
    cy.findByLabelText("Y").type(y)
})

Cypress.Commands.add("addAdditionalDataPoint", (x, y, index) => {
    cy.findByRole("button", { name: "+" }).click()

    cy.findByTestId(`x-${index}`).type(x)
    cy.findByTestId(`y-${index}`).type(y)
})
