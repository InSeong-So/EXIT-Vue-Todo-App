<template>
  <div id="app">
    <Header></Header>
    <LeftMenu></LeftMenu>
    <MiddleTask></MiddleTask>
    <RightEdit></RightEdit>
  </div>
</template>

<script>
import Header from "./routes/layouts/Header.vue";
import LeftMenu from "./routes/layouts/LeftMenu.vue";
import MiddleTask from "./routes/layouts/MiddleTask.vue";
import RightEdit from "./routes/layouts/RightEdit.vue";

export default {
  name: "App",
  components: {
    Header,
    LeftMenu,
    MiddleTask,
    RightEdit,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>