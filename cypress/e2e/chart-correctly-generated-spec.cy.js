describe("E2E tests for charts being correctly generated...", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Make sure chart is correctly generated on line page...", () => {
    cy.findByText("Line").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/line.html`)

    cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

    cy.addFirstDataPoint("3", "4")
    cy.addAdditionalDataPoint("5", "6", 1)
    cy.addAdditionalDataPoint("7", "8", 2)
    cy.addAdditionalDataPoint("1", "6", 3)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByTestId("chart-display").should("not.be.empty")
  })
  
  it("Make sure chart is correctly generated on scatter page...", () => {
    cy.findByText("Scatter").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/scatter.html`)

    cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

    cy.addFirstDataPoint("3", "4")
    cy.addAdditionalDataPoint("5", "6", 1)
    cy.addAdditionalDataPoint("7", "8", 2)
    cy.addAdditionalDataPoint("1", "6", 3)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByTestId("chart-display").should("not.be.empty")
  })

  it("Make sure chart is correctly generated on bar page...", () => {
    cy.findByText("Bar").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/bar.html`)

    cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

    cy.addFirstDataPoint("3", "4")
    cy.addAdditionalDataPoint("5", "6", 1)
    cy.addAdditionalDataPoint("7", "8", 2)
    cy.addAdditionalDataPoint("1", "6", 3)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByTestId("chart-display").should("not.be.empty")
  })

})
