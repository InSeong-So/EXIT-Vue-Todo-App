<template>
  <div class="leftMenu">
    <div class="menuList">
      <ul v-for="(item, index) in menuList" :key="index">
        <li v-if="index == 0">
          <input type="checkbox" :id="'checkbox' + index" />
          <lable :for="'checkbox' + index">{{ item.name }}</lable>
        </li>
        <li v-else>{{ item.name }}</li>
      </ul>
    </div>
    <div class="addList">
      <span>Add List</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { name: "All Tasks" },
        { name: "Shopping" },
        { name: "Cleaning" },
        { name: "Books to Read" },
        { name: "Movies to See" },
      ],
    };
  },
};
</script>

<style scoped>
.leftMenu {
  width: 20%;
  height: 95vh;
  display: flex;
  float: left;
}
</style>