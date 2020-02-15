import { selection } from '../src/sort/selection'
import { insertion, betterInsertion } from '../src/sort/insertion'
import TestUtils from './utils'

const arr = TestUtils.generateRandomArray(100000, 0, 100)
const arr2 = TestUtils.copyArray(arr)
const arr3 = TestUtils.copyArray(arr)

console.time('selection sort')
selection(arr)
console.timeEnd('selection sort')

console.time('insertion sort')
insertion(arr2)
console.timeEnd('insertion sort')

console.time('betterInsertion sort')
betterInsertion(arr3)
console.timeEnd('betterInsertion sort')

console.log(TestUtils.isSorted(arr))
console.log(TestUtils.isSorted(arr2))
console.log(TestUtils.isSorted(arr3))