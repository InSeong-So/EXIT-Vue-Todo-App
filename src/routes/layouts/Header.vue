<template>
  <div class="header">
    <div class="header-center">
      <ul>
        <li v-for="item in workList" :key="item">
          <template v-if="item.no === 0"
            ><i class="fas fa-home fa-2x"></i
          ></template>
          <template v-else>
            <i class="fas fa-plus-circle fa-2x"></i>
          </template>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <i class="fas fa-cog fa-2x"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workList: [
        { no: 0, name: "home" },
        { no: 1, name: "slot" },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 5vh;
  display: flex;
}

.header-center {
  width: 95%;
}
.header-right {
  width: 5%;
}

.header-right > i {
  margin-top: 0.5rem;
}

ul {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

li {
  margin: 0.5rem 1rem 0 0;
  display: inline-block;
}
</style>