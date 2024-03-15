describe("E2E tests for chart data being maintained across pages...", () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it("Test that chart data is maintained when switching to scatter", () => {
        cy.findByText("Line").click()

        cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

        cy.addDataPoint("3", "4", 0)
        cy.addDataPoint("5", "6", 1)
        cy.addDataPoint("7", "8", 2)

        cy.findByText("Scatter").click()
        cy.url().should("eq", `${Cypress.config("baseUrl")}/scatter.html`)

        cy.get('input').eq(0).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Dogs vs. Cats")        
        });

        cy.get('input').eq(2).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Dogs")        
        });

        cy.get('input').eq(3).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Cats")        
        });

        cy.findByTestId("x-0").invoke('val').should("equal", "3")
        cy.findByTestId("y-0").invoke('val').should("equal", "4")

        cy.findByTestId("x-1").invoke('val').should("equal", "5")
        cy.findByTestId("y-1").invoke('val').should("equal", "6")

        cy.findByTestId("x-2").invoke('val').should("equal", "7")
        cy.findByTestId("y-2").invoke('val').should("equal", "8")
    })

    it("Test that chart data is maintained when switching to bar", () => {
        cy.findByText("Line").click()

        cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

        cy.addDataPoint("3", "4", 0)
        cy.addDataPoint("5", "6", 1)
        cy.addDataPoint("7", "8", 2)

        cy.findByText("Bar").click()
        cy.url().should("eq", `${Cypress.config("baseUrl")}/bar.html`)

        cy.get('input').eq(0).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Dogs vs. Cats")        
        });

        cy.get('input').eq(2).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Dogs")        
        });

        cy.get('input').eq(3).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Cats")        
        });

        cy.findByTestId("x-0").invoke('val').should("equal", "3")
        cy.findByTestId("y-0").invoke('val').should("equal", "4")

        cy.findByTestId("x-1").invoke('val').should("equal", "5")
        cy.findByTestId("y-1").invoke('val').should("equal", "6")

        cy.findByTestId("x-2").invoke('val').should("equal", "7")
        cy.findByTestId("y-2").invoke('val').should("equal", "8")
    })

    it("Test that chart data is maintained when switching to line", () => {
        cy.findByText("Scatter").click()

        cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")

        cy.addDataPoint("3", "4", 0)
        cy.addDataPoint("5", "6", 1)
        cy.addDataPoint("7", "8", 2)

        cy.findByText("Line").click()
        cy.url().should("eq", `${Cypress.config("baseUrl")}/line.html`)

        cy.get('input').eq(0).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Dogs vs. Cats")        
        });

        cy.get('input').eq(2).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Dogs")        
        });

        cy.get('input').eq(3).then((firstInput) => {
            cy.get(firstInput).invoke('val').should("equal", "Cats")        
        });

        cy.findByTestId("x-0").invoke('val').should("equal", "3")
        cy.findByTestId("y-0").invoke('val').should("equal", "4")

        cy.findByTestId("x-1").invoke('val').should("equal", "5")
        cy.findByTestId("y-1").invoke('val').should("equal", "6")

        cy.findByTestId("x-2").invoke('val').should("equal", "7")
        cy.findByTestId("y-2").invoke('val').should("equal", "8")
    })
})