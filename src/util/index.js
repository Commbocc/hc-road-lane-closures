export function formatDate(stamp) {
  return new Date(stamp).toLocaleString()
}

// export const createDebounce = () => {
//   console.log('debounce outer')
//   let timeoutId = null
//   return (func, wait = 500) => {
//     console.log('debounce inner')
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => {
//       func()
//     }, wait)
//   }
// }

export const debounce = (callback, wait = 500) => {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args)
    }, wait)
  }
}
