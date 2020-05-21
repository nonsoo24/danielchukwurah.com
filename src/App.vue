<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
   min-height: 100vh;
}


body {
  max-width: 100%;
  overflow-x: hidden;
  min-height:100vh;
  /* overflow-y: hidden; */
}

body html{
   background-color: #f3f7f9 !important;
   min-height:100vh !important;
}

.is-open {
  width: 200px !important;
}

</style>
