function injectScript(filePath) {
  const el =
    document.getElementsByTagName('head')[0] ||
    document.getElementsByTagName('body')[0] ||
    document.firstElementChild ||
    document
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', filePath)
  el.appendChild(script)
}
injectScript(chrome.runtime.getURL('teng-xun/inject.js'))
