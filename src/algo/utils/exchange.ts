export function exchange(arr: number[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
