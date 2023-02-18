<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

body html {
  background-color: #f3f7f9 !important;
  min-height: 100vh !important;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.dark-theme body {
  background-color: #071521;
  color: #fff;
}

.is-open {
  width: 300px !important;
}
</style>