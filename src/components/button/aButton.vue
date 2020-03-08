<template>
  <button>{{text}}</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'aButton',
  props: {
    type: {
      type: String,
    },
    text: {
      type: String,
      default: () => 'button'
    },
    onClick: {
      type: Function
    }
  },
  methods: {
    add() {
      this.onClick
    }
  }
});
</script>