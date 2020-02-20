
export class Heap {
  
  constructor() {
    this.size = 0;
    this.arr = [];
  }

  private arr: number[];
  private size: number;

  private get parent() {
    return (i: number) => Math.floor(i/2)
  }

  private get leftChild() {
    return (i: number) => 2*i;
  }

  private get rightChild() {
    return (i: number) => 2*i+1;
  }

  private exchange(i: number, j:number) {
    const temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }

  // 将位置为i的元素上浮
  private swim(i: number): void {
    while(1 < i) {
      const parent = this.parent(i)
      if (this.arr[i] < this.arr[parent]) {
        break;
      }
      this.exchange(i, parent);
      i = parent
    }
  }

  // 将位置为i的元素下沉
  private sink(i: number): void {
    while (i <= this.size) {
      let maxChild = this.leftChild(i)
      if (this.size < maxChild) break

      let rightChild = this.rightChild(i)
      if (rightChild <= this.size && this.arr[maxChild] < this.arr[rightChild]) {
        maxChild = rightChild
      }

      if(this.arr[maxChild] < this.arr[i]) {
        break
      }

      this.exchange(maxChild, i)
      i = maxChild
    }

  }

  add(item: number): void {
    this.arr[this.size+1] = item
    this.size++
    this.swim(this.size)
  }

  shiftMax(): number {
    const max = this.arr[1]
    this.arr[1] = this.arr[this.size]
    this.size--
    this.sink(1)
    return max
  }

  static sort(a: number[]) {
    const heap = new Heap()
    const n = a.length
    a.forEach(item => heap.add(item))
    for(let i = 0; i<n; i++) {
      a[n-1-i] = heap.shiftMax()
    }
  }

}

// const a = [5,2,4,6,7,1,9,10,8,3]

// const heap = new Heap()
// a.forEach(item => heap.add(item))
// const b = []
// for(let i = 0; i<10; i++) {
//   b[9-i] = heap.shiftMax()
// }

// console.log(b)