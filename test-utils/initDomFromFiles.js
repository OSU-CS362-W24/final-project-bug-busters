const fs = require("fs")

const initDomFromFiles = (htmlPath, jsPath) => {
  const html = fs.readFileSync(htmlPath, 'utf8')

  document.open()
  document.write(html)
  document.close()

  jest.isolateModules(() => {
    require(jsPath)
  })
}

module.exports = initDomFromFiles
