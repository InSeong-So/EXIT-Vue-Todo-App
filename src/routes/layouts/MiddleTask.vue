<template>
  <div class="middleTask">
    <div class="allTask"></div>
    <!-- 스크롤 영역 -->
    <div class="addTask"></div>
    <div class="taskList">
      <label for="tm" class="accordionitem">
        <h2>Item 1 <span class="arrow"> >></span></h2>
      </label>
      <input type="checkbox" id="tm" />
      <p class="hiddentext">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.middleTask {
  width: 50%;
  height: 95vh;
  display: flex;
  float: left;
}

.allTask {
  width: 80%;
  height: 10%;
  display:block;
}

.addTask {
  width: 80%;
  height: 10%;
}

.taskList {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 3%;
  border: 1px solid #bdbdbd;
}

.taskList label {
  display: block;
  background-color: #eeeeee;
  padding: 10px;
  color: #424242;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border-bottom: 1px solid #bdbdbd;
  border-top: 1px solid #ffffff;
}

.taskList p {
  color: #424242;
  padding: 10px;
  font-size: 0.8em;
  line-height: 1.7em;
  border-bottom: 1px solid #bdbdbd;
  visibility: hidden;
  opacity: 0;
  display: none;
  text-align: left;
  background-color: #fff;
  margin-top: 0px;
}

#tm:checked ~ .hiddentext {
  display: block;
  visibility: visible;
  opacity: 1;
}

input#tm {
  display: none;
  position: relative;
}
</style>