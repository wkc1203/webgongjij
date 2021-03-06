export const globalData = {
  token: '',
  height: 20,
  index: 0
}
export function getGlobalData(key: keyof typeof globalData) {
  const keys = window.sessionStorage.getItem('key')
  if (keys == 'undefined') {
    return false
  }
  return keys
}

export function setGlobalData(key: keyof typeof globalData, value: any) {
  if (value) {
    globalData[key] = value
    window.sessionStorage.setItem(key, value)
  }
}