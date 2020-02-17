import { exchange, less } from '../utils'

export function insertion(arr) {
  const n = arr.length
  for(let i = 1; i < n; i++) {
    for(let j = i; 0 < j && arr[j] < arr[j-1]; j--) {
      exchange(arr, j, j - 1)
    }
  }
}

export function betterInsertion(arr) {
  const n = arr.length
  for(let i = 1; i < n; i++) {
    const cur = arr[i]
    let j = i
    for(; 0 < j; j--) {
      if (cur < arr[j-1]) {
        arr[j] = arr[j-1]
      } else {
        break
      }
    }
    arr[j] = cur
  }
}