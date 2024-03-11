describe("E2E tests for charts being correctly generated...", () => {

  it("Make sure chart is correctly generated on line page...", () => {
    cy.visit('/')

    cy.findByText("Line").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/line.html`)

    cy.findByLabelText("Chart title").type("Testing line chart generation")
    cy.findByLabelText("X label").type("X label")
    cy.findByLabelText("Y label").type("Y label")

    cy.findByLabelText("X").type("3")
    cy.findByLabelText("Y").type("4")

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByTestId("chart-display").should("not.be.empty")
  })
  
  it("Make sure chart is correctly generated on scatter page...", () => {
    cy.visit('/')

    cy.findByText("Scatter").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/scatter.html`)

    cy.findByLabelText("Chart title").type("Testing scatter chart generation")
    cy.findByLabelText("X label").type("X label")
    cy.findByLabelText("Y label").type("Y label")

    cy.findByLabelText("X").type("3")
    cy.findByLabelText("Y").type("4")

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByTestId("chart-display").should("not.be.empty")
  })

  it("Make sure chart is correctly generated on bar page...", () => {
    cy.visit('/')

    cy.findByText("Bar").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/bar.html`)

    cy.findByLabelText("Chart title").type("Testing bar chart generation")
    cy.findByLabelText("X label").type("X label")
    cy.findByLabelText("Y label").type("Y label")

    cy.findByLabelText("X").type("3")
    cy.findByLabelText("Y").type("4")

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByTestId("chart-display").should("not.be.empty")
  })

})
