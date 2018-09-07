<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="onClick">click this</button>
  </div>
</template>

<script src="./<%= name %>.js"></script>
<style scoped src="./<%= name %>.css"></style>
