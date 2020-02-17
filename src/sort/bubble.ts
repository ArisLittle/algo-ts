import { exchange, less } from '../utils'

export function bubble(arr: any[]): void {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      if (less(arr[j+1], arr[j])) {
        exchange(arr, j, j+1)
      }
    }
  }
}

export function betterBubble(arr: any[]) {
  const n = arr.length
  for(let i = 0; i < n; i++) {
    let max = arr[0]
    for(let j=0; j<n-i+1; j++) {
      if (arr[j+1] < max) {
        arr[j] = arr[j+1]
        arr[j+1] = max
      } else {
        // arr[j] = max
        max = arr[j+1]
      }
    }
  }
}