import {less} from '../../src/utils'

export default class TestUtils {
  static generateRandomArray(length: number, start: number, end: number): number[] {
    const result = []
    for(let i = 0; i < length; i++) {
      result.push(TestUtils.getRandomInt(start, end))
    }
    return result
  }

  static copyArray<T>(arr: T[]): T[] {
    return arr.map(x => x)
  }

  static isSorted(arr): boolean {
    let result = true
    for(let i = 0, len = arr.lenght; i < len; i++) {
      if(!less(arr[i], arr[i])) return false
    }
    return result
  }

  private static getRandomInt(start: number, end: number): number {
    return Math.round(Math.random() * (end - start)) + start
  }
}
