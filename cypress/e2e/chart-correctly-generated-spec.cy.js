describe("E2E tests for charts being correctly generated...", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Make sure chart is correctly generated on line page...", () => {
    cy.findByText("Line").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/line.html`)

    cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

    cy.addDataPoint("3", "4", 0)
    cy.addDataPoint("5", "6", 1)
    cy.addDataPoint("7", "8", 2)
    cy.addDataPoint("1", "6", 3)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByRole("img").should("have.attr", "src")
  })
  
  it("Make sure chart is correctly generated on scatter page...", () => {
    cy.findByText("Scatter").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/scatter.html`)

    cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

    cy.addDataPoint("3", "4", 0)
    cy.addDataPoint("5", "6", 1)
    cy.addDataPoint("7", "8", 2)
    cy.addDataPoint("1", "6", 3)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByRole("img").should("have.attr", "src")
  })

  it("Make sure chart is correctly generated on bar page...", () => {
    cy.findByText("Bar").click()

    cy.url().should("eq", `${Cypress.config("baseUrl")}/bar.html`)

    cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

    cy.addDataPoint("3", "4", 0)
    cy.addDataPoint("5", "6", 1)
    cy.addDataPoint("7", "8", 2)
    cy.addDataPoint("1", "6", 3)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByRole("img").should("have.attr", "src")
  })

})
