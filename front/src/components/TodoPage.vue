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

    <div class="input-group mb-3" v-for="(todo, index) in todoList">
      <input type="text" class="form-control" :value="todo.name">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown
        </button>
        <div class="dropdown-menu">
          <li>
            <button type="button" class="dropdown-item" data-toggle="modal" data-target="#detailModal"
                    @click="getDetail(todo)">상세보기
            </button>
          </li>
          <li>
            <div class="dropdown-divider"></div>
          </li>
          <li><a href="#" class="dropdown-item" @click="deleteTodo(todo)">삭제</a></li>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModalCenterTitle"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailModalCenterTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8" style="background-color: black">
                  <div class="row" style="background-color: green">
                    asdf
                  </div>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.

                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.

                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                  <div class="row" style="background-color: green">
                    asdf
                  </div>
                </div>
                <div class="col-md-4" style="background-color: red">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
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
        todoList: [],
        detail: [],
        temp: {},
      }
    },
    methods: {
      deleteTodo(todo) {
        return;
        // this.todoList.forEach(function(_todo,i, obj){
        //   if(_todo.id === todo.id){
        //     this.$http.delete('http://localhost:8226/api/todoList/'+todo.id)
        //     .then((result) => {
        //         obj.splice(i, 1)
        //     })
        //   }
        // })
      },
      createTodo(name) {
        if (name != null) {
          this.$http.defaults.headers.post['Content-Type'] = 'application/json';
          const idx = this.todoList.length
          this.$set(this.temp, "idx", idx + 1)
          this.$set(this.temp, "name", name)
          this.todoList.push(this.temp)
          this.$http.post('http://localhost:8226/api/todoList', {
            todoList: this.todoList
          }).then((result) => {
            this.getTodos()
          })
          this.name = null
        }
      },
      getTodos() {
        this.$http.get('http://localhost:8226/api/todoList')
          .then((result) => {
            this.todoList = result.data.data;
          })
      },
      getDetail(index) {
        return;
        // this.$http.get('http://localhost:8226/api/detail/' + index)
        //   .then((result) => {
        //     this.todoList = result.data.data;
        //   })
      }
    },
    mounted() {
      this.getTodos();
    }
  }
</script>
