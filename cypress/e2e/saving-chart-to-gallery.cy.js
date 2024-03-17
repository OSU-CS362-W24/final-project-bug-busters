describe('Saving charts to the gallery tests', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test that a single chart is properly saved to the gallery", () => {
    cy.findByText("Line").click()

    cy.addChartTitleAndLabels("Cats vs. Dogs", "Cats", "Dogs")

    cy.addDataPoint("1", "3", 0)
    cy.addDataPoint("2", "7", 1)
    cy.addDataPoint("3", "15", 2)
    cy.addDataPoint("4", "25", 3)
    cy.addDataPoint("5", "40", 4)

    cy.findByRole("button", { name: "Generate chart" }).click()

    cy.findByRole("button", { name: "Save chart" }).click()

    cy.findByText("Gallery").click()

    cy.findByText("Cats vs. Dogs").should("exist")
  })
})