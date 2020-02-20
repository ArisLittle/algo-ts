import { selection } from '../src/sort/selection'
import { insertion, betterInsertion } from '../src/sort/insertion'
import { bubble, betterBubble } from '../src/sort/bubble'
import { merge } from '../src/sort/merge'
import { quick} from '../src/sort/quick'
import { Heap } from '../src/sort/heap'
import TestUtils from './utils'

const number = parseInt(process.argv[2])
const arr = TestUtils.generateRandomArray(isNaN(number) ? 10000 : number, 0, 100)
// console.log(arr.toString())
const arr2 = TestUtils.copyArray(arr)
const arr3 = TestUtils.copyArray(arr)
const arr4 = TestUtils.copyArray(arr)
const arr5 = TestUtils.copyArray(arr)
const arr6 = TestUtils.copyArray(arr)
const arr7 = TestUtils.copyArray(arr)
const arr8 = TestUtils.copyArray(arr)
const arr9 = TestUtils.copyArray(arr)

function timeSort(sortFunc, arr) {
  const label = `${sortFunc.name} sort`  
  console.time(label)
  sortFunc(arr)
  console.timeEnd(label)
  if (!TestUtils.isSorted(arr)) {
    console.log(false)
  }
}

timeSort(selection, arr)
timeSort(insertion, arr2)
timeSort(betterInsertion, arr3)
// timeSort(bubble, arr4)
// timeSort(betterBubble, arr5)
timeSort(merge, arr6)
timeSort(quick, arr7)
timeSort(Heap.sort, arr9)