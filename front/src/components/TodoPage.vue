<template>
  <div class="container" style="height:100vh">

    <h2>Todo List</h2>

    <div class="input-group mb-5">
      <input type="text" class="form-control" placeholder="할일을 입력하세요" aria-label="할일을 입력하세요"
             aria-describedby="button-todo-add" v-model="name"
             @keyup.enter="createTodo(name)">
      <div class="input-group-append">
        <button class="btn btn-outline-success" type="button" id="button-todo-add" @click="createTodo(name)">추가
        </button>
      </div>
    </div>

    <div class="input-group mb-3" v-for="(todo, index) in todos">
      <input type="text" class="form-control" :value="todo.name">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown
        </button>
        <div class="dropdown-menu">
          <li><a href="#" class="dropdown-item" @click="getDetail(index)">상세보기</a></li>
          <li><div class="dropdown-divider"></div></li>
          <li><a href="#" class="dropdown-item" @click="deleteTodo(todo)">삭제</a></li>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TodoPage',
    data() {
      return {
        name: null,
        todos: [],
        detail: [],
        temp: {},
      }
    },
    methods: {
      deleteTodo(todo){
        return;
        // this.todos.forEach(function(_todo,i, obj){
        //   if(_todo.id === todo.id){
        //     this.$http.delete('http://localhost:8226/api/todos/'+todo.id)
        //     .then((result) => {
        //         obj.splice(i, 1)
        //     })
        //   }
        // })
      },
      createTodo(name) {
        if (name != null) {
          this.$http.defaults.headers.post['Content-Type'] = 'application/json';
          const idx = this.todos.length
          this.$set(this.temp, "idx", idx + 1)
          this.$set(this.temp, "name", name)
          this.todos.push(this.temp)
          this.$http.post('http://localhost:8226/api/todos', {
            todos: this.todos
          }).then((result) => {
            this.getTodos()
          })
          this.name = null
        }
      },
      getTodos() {
        this.$http.get('http://localhost:8226/api/todos')
          .then((result) => {
            this.todos = result.data.data;
          })
      },
      getDetail(index) {
        return;
        // this.$http.get('http://localhost:8226/api/detail/' + index)
        //   .then((result) => {
        //     this.todos = result.data.data;
        //   })
      }
    },
    mounted() {
      this.getTodos();
    }
  }
</script>
