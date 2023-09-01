console.log('Skippable 加载成功')

const logAttempt = count => console.log(`Skippable 尝试注入... 第 ${count} 次`)
const logSuccess = () => console.log('Skippable 注入成功')
const logFailure = () => console.log('Skippable 注入失败')

const TIMEOUT = 60 * 2 // 两分钟
let count = 1

const inject = (count, timeout = TIMEOUT) => {
  logAttempt(count)

  const skippableEl = document.querySelector('.public-vip-text')

  if (skippableEl) {
    skippableEl.classList.add('skippable')
    logSuccess()
  } else if (count > timeout) {
    logFailure()
  } else {
    setTimeout(() => inject(count + 1), 1000)
  }
}

inject(count)
