console.log('Skippable 加载成功')

const logAttempt = count => console.log(`Skippable 尝试注入... 第 ${count} 次`)
const logSuccess = () => console.log('Skippable 注入成功')
const logFailure = () => console.log('Skippable 注入失败')

const inject = () => {
  const _slice = Array.prototype.slice
  Array.prototype.slice = function (...args) {
    if (typeof this[0] === 'object' && this[0] !== null) {
      if (this[0].api === 'mtop.youku.play.ups.appinfo.get') {
        if (this[0].data?.data?.ad) {
          this[0].data.data.ad.VAL = []
        }
      }
    }
    return _slice.call(this, ...args)
  }
  logSuccess()
}

inject()
