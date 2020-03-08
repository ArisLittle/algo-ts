import { exchange } from './exchange'
import { less } from './less'
import {selection} from '../sort/selection'
import {betterInsertion, insertion} from '../sort/insertion'
import {merge} from '../sort/merge'
import {quick} from '../sort/quick'

function timeSort(sortFunc: Function, arr: number[]) {
  const before = Date.now()
  sortFunc(arr)
  return Date.now() - before;
}

const sortTypeMap = {
  'selection': selection,
  'insertion': betterInsertion,
  'merge': merge,
  'quick': quick
}
type sortType = 'selection'|'insertion'|'merge'|'quick'

class TestUtils {
  static generateRandomArray(length: number, start: number, end: number): number[] {
    const result = []
    for(let i = 0; i < length; i++) {
      result.push(TestUtils.getRandomInt(start, end))
    }
    return result
  }

  // static copyArray<T>(arr: T[]): T[] {
  //   return arr.map(x => x)
  // }
  static copyArray(arr: number[]): number[] {
    return arr.map(x => x)
  }

  static isSorted(arr: any[]): boolean {
    for(let i = 0, len = arr.length; i < len - 1; i++) {
      if(less(arr[i+1], arr[i])) return false
    }
    return true
  }

  static timeSort(type: sortType, arr: number[]) {
    const sortFunc = sortTypeMap[type];
    const before = Date.now()
    sortFunc(arr)
    const usedTime = Date.now() - before;
    return TestUtils.isSorted(arr) ? usedTime : -1
  }

  private static getRandomInt(start: number, end: number): number {
    return Math.round(Math.random() * (end - start)) + start
  }
}

export {
  exchange,
  less,
  timeSort,
  TestUtils
}