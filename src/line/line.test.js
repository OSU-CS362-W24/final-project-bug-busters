/**
* @jest-environment jsdom
*/

require("@testing-library/jest-dom")

const domTesting = require("@testing-library/dom")
const userEvent = require("@testing-library/user-event").default

const initDomFromFiles = require("../../test-utils/initDomFromFiles.js")

test("testing...", () => {
  initDomFromFiles(
    `${__dirname}/line.html`,
    `${__dirname}/line.js`
  ) 
})
