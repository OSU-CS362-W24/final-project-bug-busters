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
