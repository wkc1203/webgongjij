const globalData = {
  token: ''
}
export function getGlobalData(key: keyof typeof globalData) {
  return window.sessionStorage.getItem(key)
}

export function setGlobalData(key: keyof typeof globalData, value: string) {
  return window.sessionStorage.setItem(key, value)
}