import { exchange, less } from '../utils'

export function quick(arr: any[]): void {

  function _patition(arr: any[], lo: number, hi: number): number {
    let p = lo
    let j = lo
    let v = arr[lo]
    for(let i = lo+1; i <= hi; i++) {
      if (arr[i] <= v) {
        exchange(arr, ++j, i)
      }
    }
    exchange(arr, p, j)
    return j
  }

  function _sort(arr: any[], lo: number, hi:number): void {
    if (hi <= lo) return
    const p = _patition(arr, lo, hi)
    // 这里一定是p-1而不是p 否则递归出不来 比如lo=0,p=1
    _sort(arr, lo, p-1)
    _sort(arr, p+1, hi)
  }

  function sort(arr: any[]) {
    _sort(arr, 0, arr.length-1)
  }

  sort(arr)
}