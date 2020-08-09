const path = require('path')
const webpackConfig = require('../../webpack.config')
const packageJson = require('./package.json')
const { merge } = require('webpack-merge')

const mainfileName = `${packageJson.main}`.split('/').pop()

const mainConfig = merge(webpackConfig, {
  output: {
    ...webpackConfig.output,
    path: path.resolve(__dirname, 'lib'),
    library: `${packageJson.name}`,
    filename: `${mainfileName}`,
  },
})
console.log(mainConfig)
module.exports = [mainConfig]
