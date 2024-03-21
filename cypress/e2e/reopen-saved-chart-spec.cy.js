describe("E2E tests for re-opening a saved chart", () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Test that clicking on a saved chart opens the chart builder with correct data (Line)", () => {
        // visit the chart builder page to generate a chart
        cy.visit('/')
	    cy.findByText("Line").click()
        // generate a chart with some data
        cy.addChartTitleAndLabels("Dogs vs. Cats", "Dogs", "Cats")
        cy.addDataPoint("3", "4", 0)
        cy.addDataPoint("5", "6", 1)
        cy.addDataPoint("7", "8", 2)
        cy.findByText("Line").click()
        cy.get('#generate-chart-btn').click()
	    cy.wait(500) // wait for chart generation
        cy.get('#save-chart-btn').click()
	    cy.visit('/')
        // check if there's a saved chart with title "Dogs vs. Cats" in the gallery
        cy.contains("Dogs vs. Cats").should("exist")
		cy.findByText("Dogs vs. Cats").click()
        
		// verify that the chart title and labels are correctly displayed
        cy.get('input').eq(0).should("have.value", "Dogs vs. Cats")
        cy.get('input').eq(2).should("have.value", "Dogs")
        cy.get('input').eq(3).should("have.value", "Cats")

        // Verify that the data points are correctly displayed
        cy.findByTestId("x-0").should("have.value", "3")
        cy.findByTestId("y-0").should("have.value", "4")
        cy.findByTestId("x-1").should("have.value", "5")
        cy.findByTestId("y-1").should("have.value", "6")
        cy.findByTestId("x-2").should("have.value", "7")
        cy.findByTestId("y-2").should("have.value", "8")
		cy.get('#chart-img').should("exist")

    })
    it("Test that clicking on a saved chart opens the chart builder with correct data (Bar)", () => {
        // visit the chart builder page to generate a chart
        cy.visit('/')
	    cy.findByText("Bar").click()
        // generate a chart with some data
        cy.addChartTitleAndLabels("Cats vs. Dogs", "Cats", "Dogs")
        cy.addDataPoint("3", "4", 0)
        cy.addDataPoint("2", "1", 1)
        cy.addDataPoint("7", "0", 2)
        cy.findByText("Bar").click()
        cy.get('#generate-chart-btn').click()
	    cy.wait(500) // wait for chart generation
        cy.get('#save-chart-btn').click()
	    cy.visit('/')
        // check if there's a saved chart with title "Cats vs. Dogs" in the gallery
        cy.contains("Cats vs. Dogs").should("exist")
		cy.findByText("Cats vs. Dogs").click()
        
		// verify that the chart title and labels are correctly displayed
        cy.get('input').eq(0).should("have.value", "Cats vs. Dogs")
        cy.get('input').eq(2).should("have.value", "Cats")
        cy.get('input').eq(3).should("have.value", "Dogs")

        // verify that the data points are correctly displayed
        cy.findByTestId("x-0").should("have.value", "3")
        cy.findByTestId("y-0").should("have.value", "4")
        cy.findByTestId("x-1").should("have.value", "2")
        cy.findByTestId("y-1").should("have.value", "1")
        cy.findByTestId("x-2").should("have.value", "7")
        cy.findByTestId("y-2").should("have.value", "0")
		cy.get('#chart-img').should("exist")

    })
    it("Test that clicking on a saved chart opens the chart builder with correct data (Scatter)", () => {
        // visit the chart builder page to generate a chart
        cy.visit('/')
	    cy.findByText("Scatter").click()
        // generate a chart with some data
        cy.addChartTitleAndLabels("Test3", "t1", "t2")
        cy.addDataPoint("5", "4", 0)
        cy.addDataPoint("5", "1", 1)
        cy.addDataPoint("7", "6", 2)
        cy.findByText("Scatter").click()
        cy.get('#generate-chart-btn').click()
	    cy.wait(500) // wait for chart generation
        cy.get('#save-chart-btn').click()
	    cy.visit('/')
        // check if there's a saved chart with title "Test3" in the gallery
        cy.contains("Test3").should("exist")
		cy.findByText("Test3").click()
        
		// verify that the chart title and labels are correctly displayed
        cy.get('input').eq(0).should("have.value", "Test3")
        cy.get('input').eq(2).should("have.value", "t1")
        cy.get('input').eq(3).should("have.value", "t2")

        // verify that the data points are correctly displayed
        cy.findByTestId("x-0").should("have.value", "5")
        cy.findByTestId("y-0").should("have.value", "4")
        cy.findByTestId("x-1").should("have.value", "5")
        cy.findByTestId("y-1").should("have.value", "1")
        cy.findByTestId("x-2").should("have.value", "7")
        cy.findByTestId("y-2").should("have.value", "6")
		cy.get('#chart-img').should("exist")

    })
})

