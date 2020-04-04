<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body {
    height: 100vh;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100vh;
  }

  i {
    font-style: italic
  }

  .widget-subheading {
    color: #858a8e;
    font-size: 10px
  }

  .btn-actions-pane-right {
    margin-left: auto;
    white-space: nowrap
  }

  .scroll-area-sm {
    height: 288px;
    overflow-x: hidden
  }

  .todo-indicator {
    position: absolute;
    width: 4px;
    height: 60%;
    border-radius: 0.3rem;
    left: 0.625rem;
    top: 20%;
    opacity: .6;
    transition: opacity .2s
  }

  .widget-content {
    padding: 1rem;
    flex-direction: row;
    align-items: center
  }

  .widget-content .widget-content-wrapper {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center
  }

  .widget-content .widget-content-right.widget-content-actions {
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s
  }

  .widget-content .widget-content-right {
    margin-left: auto
  }

</style>
