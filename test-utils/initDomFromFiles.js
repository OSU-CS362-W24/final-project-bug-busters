const fs = require("fs")

const initDomFromFiles = (htmlPath, jsPath) => {
  const html = fs.readFileSync(htmlPath, 'utf8')

  jest.isolateModules(() => {
    require(jsPath)
  })

  document.open()
  document.write(html)
  document.close()
}

module.exports = initDomFromFiles
