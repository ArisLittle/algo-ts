import { exchange, less } from '../utils'

export function selection(arr: number[]) {
  const n = arr.length
  for(let i = 0; i < n; i++) {
    let min = i
    for(let j = i; j < n; j++) {
      if (less(arr[j], arr[min])) {
        min = j
      }
    }
    exchange(arr, i, min)
  }
}