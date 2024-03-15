/**
* @jest-environment jsdom
*/

require("@testing-library/jest-dom")

const domTesting = require("@testing-library/dom")
const userEvent = require("@testing-library/user-event").default

const initDomFromFiles = require("../../test-utils/initDomFromFiles.js")


describe("Integration tests for adding values in the chart builder...", () => {
  test("Testing functionality of add button in chart builder with multiple adds...", async () => {
    initDomFromFiles(
      `${__dirname}/line.html`,
      `${__dirname}/line.js`
    ) 

    const user = userEvent.setup()

    const firstX = domTesting.getByTestId(document, "x-0")
    const firstY = domTesting.getByTestId(document, "y-0")
    const addButton = domTesting.getByText(document, "+")

    await user.type(firstX, "3")
    await user.type(firstY, "4")
    
    await user.click(addButton)

    const secondX = domTesting.getByTestId(document, "x-1")
    const secondY = domTesting.getByTestId(document, "y-1")

    await user.type(secondX, "5")
    await user.type(secondY, "6")

    await user.click(addButton)
    
    const thirdX = domTesting.getByTestId(document, "x-2")
    const thirdY = domTesting.getByTestId(document, "y-2")
    
    await user.type(thirdX, "7")
    await user.type(thirdY, "8")
    
    await user.click(addButton)

    expect(domTesting.getByTestId(document, "x-0")).toHaveValue(3)
    expect(domTesting.getByTestId(document, "y-0")).toHaveValue(4)

    expect(domTesting.getByTestId(document, "x-1")).toHaveValue(5)
    expect(domTesting.getByTestId(document, "y-1")).toHaveValue(6)
    
    expect(domTesting.getByTestId(document, "x-2")).toHaveValue(7)
    expect(domTesting.getByTestId(document, "y-2")).toHaveValue(8)

    expect(domTesting.getByTestId(document, "x-3")).not.toBeNull()
    expect(domTesting.getByTestId(document, "y-3")).not.toBeNull()
  })
})

describe("Integration tests for alerts being displayed with a missing chart", () => {
  test("clicks generate button with all sections blank should display no data at all alert", async () => {
    //mock window.alert
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    await user.click(generateButton)

    //Assert
    expect(mockAlert).toHaveBeenCalledWith("Error: No data specified!")

    mockAlert.mockRestore()
  })

  test("clicks generate button with only x label should display no data at all alert", async () => {
    //mock window.alert
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    const xLabel = domTesting.getByLabelText(document, "X label")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    await user.type(xLabel, "Test")
    await user.click(generateButton)

    //Assert
    expect(mockAlert).toHaveBeenCalledWith("Error: No data specified!")

    mockAlert.mockRestore()
  })

  test("clicks generate button with only y label should display no data at all alert", async () => {
    //mock window.alert
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    const yLabel = domTesting.getByLabelText(document, "Y label")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    await user.type(yLabel, "Test")
    await user.click(generateButton)

    //Assert
    expect(mockAlert).toHaveBeenCalledWith("Error: No data specified!")

    mockAlert.mockRestore()
  })
})