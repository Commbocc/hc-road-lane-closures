export function formatDate(stamp) {
  return new Date(stamp).toLocaleString()
}

export const createDebounce = () => {
  let timeoutId = null
  return (func, wait = 500) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func()
    }, wait)
  }
}

export const debounce = (callback, wait = 500) => {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args)
    }, wait)
  }
}
