<template>
  <div id="app">
    <section>
      <h2>测试用例（自然数）</h2>
      <div>
        <span>范围</span>
        <label for="min">min</label>
        <input type="number" id="min" v-model="min"/>
        <label for="max">max</label>
        <input type="number" id="max" v-model="max"/>
      </div>
      <div>
        <label for="count">数量</label>
        <input type="number" id="count" v-model="count"/>
      </div>
    </section>

    <section>
      <h2>排序方式</h2>
      <div>
        <template v-for="(item, index) in sortMethods">
          <div :key="index">{{item.name}}</div>
          <ul :key="item.catogory">
            <li v-for="sub in item.children" :key="sub.type">
              <input type="checkbox"
                :name="sub.type" 
                :id="sub.type"
                v-model="sub.checked"/>
              <label :for="sub.type">{{sub.name}}</label>
            </li>
          </ul>
        </template>
      </div>
    </section>

    <section>
      <h2>测试结果</h2>
      <div>
        <button @click="generateTaskArr">生成用例</button>
        <button>查看用例</button>
        <button @click="start">开始排序</button>
      </div>
      <table>
        <thead>
          <th>类型</th>
          <th>运行时间</th>
        </thead>
        <tbody>
          <tr v-for="item in selectedSort" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.result}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {TestUtils} from './algo/utils';
let testArr: number[] = [];

export default Vue.extend({
  name: 'App',
  data: function() {
    return {
      min: 0,
      max: 100,
      count: 100,
      sortMethods: [
        {
          catogory: 'selection',
          name: '选择排序',
          isExpanded: true,
          children: [
            {type: 'selection', name: '选择排序', checked: false, result: ''}
          ]
        },
        {
          catogory: 'insertion',
          name: '插入排序',
          isExpanded: true,
          children: [
            {type: 'insertion', name: '插入排序', checked: false, result: ''},
            {type: 'shell', name: '希尔排序', checked: false, result: ''}
          ]
        },
        {
          catogory: 'merge',
          name: '归并排序',
          isExpanded: true,
          children: [
            {type: 'merge', name: '归并排序', checked: false, result: ''},
            {type: 'mergeBottomUp', name: '归并排序-自底向上', checked: false, result: ''},
          ]
        },
        {
          catogory: 'heap',
          name: '堆排序',
          isExpanded: true,
          children: [
            {type: 'head', name: '堆排序', checked: false, result: ''},
            {type: 'indexed', name: '索引堆', checked: false, result: ''}
          ]
        },
        {
          catogory: 'quick',
          name: '快速排序',
          isExpanded: true,
          children: [
            {type: 'quick', name: '快速排序' ,checked: false, result: ''},
            {type: 'quick3ways', name: '三路快排', checked: false, result: ''},
          ]
        },
      ]
    }
  },
  computed: {
    selectedSort() {
      const result: any[] = []
      this.sortMethods.forEach(item => result.push(...item.children))
      return result.filter(type => type.checked);
    }
  },
  methods: {
    start() {
      console.log(1)
      this.selectedSort.forEach(type => {
        console.log(type)
        const arr = TestUtils.copyArray(testArr)
        type.result = TestUtils.timeSort(type.type, arr);
      })
    },
    generateTaskArr() {
      testArr = TestUtils.generateRandomArray(this.count, this.min, this.max);
      console.log(testArr)
    }
  }
});
</script>

<style>
table {
  margin-bottom: 500px;
}
</style>
