<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="click">toggle</button>
  </div>
</template>

<script src="./<%= name %>.js"></script>
<style scoped src="./<%= name %>.css"></style>
