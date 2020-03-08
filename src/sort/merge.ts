
export function merge(arr: any[]) {
  const aux: number[] = []
  function _merge(arr: any[], low: number, high: number) {
    const mid = Math.floor((high + low) / 2)
    for(let temp = low; temp <=high; temp++) {
      aux[temp] = arr[temp]
    }

    let n = high - low + 1
    let i = low, j = mid + 1
    for (let k = 0; k < n; k++) {
      if (i > mid) {
        arr[low + k] = aux[j++]
      } else if (j > high) {
        arr[low + k] = aux[i++]
      } else if (aux[i] < aux[j]) {
        arr[low + k] = aux[i++]
      } else {
        arr[low + k] = aux[j++]
      }
    }
  }

  function _sort(arr: any[], low: number, high: number) {
    if (high <= low) return
    const mid = Math.floor((high + low) / 2)
    _sort(arr, low, mid)
    _sort(arr, mid+1, high)
    _merge(arr, low, high)
  }

  function sort(arr: any[]) {
    _sort(arr, 0, arr.length-1)
  }

  sort(arr)
}