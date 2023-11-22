<script setup lang="ts">
import {useFileSizeFormat} from "vueformatkit";

const exampleByteValues = [
  undefined,
  500,
  5000,
  50000,
  500000,
  5000000,
  5000000000,
];
</script>

<template>
  <div v-for="value in exampleByteValues">
    <span class="valueLabel">{{ value }}:</span>
    <span>{{ useFileSizeFormat(value) }}</span>
  </div>
</template>

<style scoped>
.valueLabel {
  min-width: 150px;
  display: inline-block;
}
</style>
