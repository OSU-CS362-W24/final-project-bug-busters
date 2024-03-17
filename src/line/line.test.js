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
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    await user.click(generateButton)

    //Assert
    expect(spy).toHaveBeenCalledWith("Error: No data specified!")

    spy.mockRestore()
  })

  test("clicks generate button with only x label should display no data at all alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

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
    expect(spy).toHaveBeenCalledWith("Error: No data specified!")

    spy.mockRestore()
  })

  test("clicks generate button with only y label should display no data at all alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

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
    expect(spy).toHaveBeenCalledWith("Error: No data specified!")

    spy.mockRestore()
  })

  test("clicks generate button with both x and y label should display no data at all alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    const xLabel = domTesting.getByLabelText(document, "X label")
    const yLabel = domTesting.getByLabelText(document, "Y label")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    await user.type(xLabel, "Test")
    await user.type(yLabel, "Test")
    await user.click(generateButton)

    //Assert
    expect(spy).toHaveBeenCalledWith("Error: No data specified!")

    spy.mockRestore()
  })

  test("clicks generate button with data but no labels displays no data alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    const xValue = domTesting.getByTestId(document, "x-0")
    const yValue = domTesting.getByTestId(document, "y-0")
    await user.type(xValue, "9")
    await user.type(yValue, "9")
    await user.click(generateButton)

    //Assert
    expect(spy).toHaveBeenCalledWith("Error: Must specify a label for both X and Y!")

    spy.mockRestore()
  })

  test("clicks generate button with data but no y label displays no data alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    const xLabel = domTesting.getByLabelText(document, "X label")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    const xValue = domTesting.getByTestId(document, "x-0")
    const yValue = domTesting.getByTestId(document, "y-0")
    await user.type(xValue, "9")
    await user.type(yValue, "9")
    await user.type(xLabel, "Test")
    await user.click(generateButton)

    //Assert
    expect(spy).toHaveBeenCalledWith("Error: Must specify a label for both X and Y!")

    spy.mockRestore()
  })  

  test("clicks generate button with data but no x label displays no data alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    const yLabel = domTesting.getByLabelText(document, "Y label")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    const xValue = domTesting.getByTestId(document, "x-0")
    const yValue = domTesting.getByTestId(document, "y-0")
    await user.type(xValue, "9")
    await user.type(yValue, "9")
    await user.type(yLabel, "Test")
    await user.click(generateButton)

    //Assert
    expect(spy).toHaveBeenCalledWith("Error: Must specify a label for both X and Y!")

    spy.mockRestore()
  })  

  test("clicks generate button with one of each (label and data) is missing should display no label alert", async () => {
    //spy on function
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {})

    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    //get the buttons and text boxes
    const generateButton = domTesting.getByText(document, "Generate chart")
    const resetButton = domTesting.getByText(document, "Clear chart data")
    const xLabel = domTesting.getByLabelText(document, "X label")
    
    //Act 
    const user = userEvent.setup()
    await user.click(resetButton)
    const xValue = domTesting.getByTestId(document, "x-0")
    await user.type(xValue, "9")
    await user.type(xLabel, "Test")
    await user.click(generateButton)

    //Assert
    expect(spy).toHaveBeenCalledWith("Error: Must specify a label for both X and Y!")

    spy.mockRestore()
  })  
})



describe("Integration tests for clearing chart data", function() {
  test('Clicking "clear chart data" clears the chart title', async() => {
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    const user = userEvent.setup()
    const clearChartButton = domTesting.getByText(document, "Clear chart data")
    const chartTitle = domTesting.getAllByRole(document, 'textbox')[0]          //Returns a list of 3 inputs. Title is the first

    await user.type(chartTitle, "Title")                                        //Have the "user" type a title
    expect(domTesting.getAllByRole(document, 'textbox')[0].value).toBe("Title") //Check the title has changed

    await user.click(clearChartButton)                                          //Click "Clear chart data" button
    expect(domTesting.getAllByRole(document, 'textbox')[0].value).toBe("")      //Verify the data has been cleared
  })

  test('Clicking "clear chart data" clears the chart color', async() => {
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    const user = userEvent.setup()
    const clearChartButton = domTesting.getByText(document, "Clear chart data")
    const chartColor = document.getElementById('chart-color-input')

    domTesting.fireEvent.input(chartColor, {target: {value: '#ffffff'}})        //Change the color value to white
    expect(document.getElementById('chart-color-input').value).toBe("#ffffff")  //Verify the change

    await user.click(clearChartButton)                                          //Click clear button
    expect(document.getElementById('chart-color-input').value).toBe("#ff4500")  //Check the data was cleared (#ff4500 -- red-ish -- is the base value)
  })

  test('Clicking "clear chart data" clears the chart X and Y labels', async() => {
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    const user = userEvent.setup()
    const clearChartButton = domTesting.getByText(document, "Clear chart data")
    const chartX = domTesting.getAllByRole(document, 'textbox')[1];             //Get the X and Y labels. These are the other two labels mentioned above, thus index's 1 and 2
    const chartY = domTesting.getAllByRole(document, 'textbox')[2];

    await user.type(chartX, "X")                                                //Type label and verify 
    expect(domTesting.getAllByRole(document, 'textbox')[1].value).toBe("X")
    
    await user.type(chartY, "Y")
    expect(domTesting.getAllByRole(document, 'textbox')[2].value).toBe("Y")

    await user.click(clearChartButton)                                          //Clear and verify both are blank
    expect(domTesting.getAllByRole(document, 'textbox')[1].value).toBe("")
    expect(domTesting.getAllByRole(document, 'textbox')[2].value).toBe("")
  })

  test('Clicking "clear chart data" clears the chart X and Y values', async() => {
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    const user = userEvent.setup()
    const clearChartButton = domTesting.getByText(document, "Clear chart data")
    const x1 = domTesting.getAllByRole(document, 'spinbutton')[0];              //At base, there are 2 spinbuttons, the original X and Y inputs
    const y1 = domTesting.getAllByRole(document, 'spinbutton')[1];

    await user.type(x1, "1")                                                    //Type and verify
    expect(domTesting.getAllByRole(document, 'spinbutton')[0]).toHaveValue(1)
    
    await user.type(y1, "2")
    expect(domTesting.getAllByRole(document, 'spinbutton')[1]).toHaveValue(2)

    await user.click(clearChartButton)                                          //Clear and verify
    expect(domTesting.getAllByRole(document, 'spinbutton')[0]).toHaveValue(null)
    expect(domTesting.getAllByRole(document, 'spinbutton')[1]).toHaveValue(null)
  })

  test('Clicking "clear chart data" reset the page to one pair of X-Y values', async() => {
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`) 

    const user = userEvent.setup()
    const clearChartButton = domTesting.getByText(document, "Clear chart data")
    const addRowButton = domTesting.getByText(document, "+")

    await user.click(addRowButton)                                              //Add a row
    expect(domTesting.getAllByRole(document, 'spinbutton').length).toBe(4)      //If a row was added, the number of spinbutton inputs should be the previous amount plus two (in this case 4)

    await user.click(clearChartButton)                                          //Clear
    expect(domTesting.getAllByRole(document, 'spinbutton').length).toBe(2)      //Check that the number of spinbuttons has been decreased back to the original size (2)
  })
})