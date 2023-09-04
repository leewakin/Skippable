console.log('Skippable 加载成功')

const logAttempt = count => console.log(`Skippable 尝试注入... 第 ${count} 次`)
const logSuccess = () => console.log('Skippable 注入成功')
const logFailure = () => console.log('Skippable 注入失败')

const inject = () => {
  const _parse = JSON.parse
  JSON.parse = function (...args) {
    if (typeof args[0] === 'string' && args[0].includes('ads')) {
      const json = _parse(args[0])
      json.ads = []
      args[0] = JSON.stringify(json)
    }
    return _parse.call(this, ...args)
  }
  logSuccess()
}

inject()
