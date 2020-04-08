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


    <ul class=" list-group list-group-flush" v-for="(todo, index) in todoList">
      <!--      <li class="list-group-item">-->
      <!--        <div class="todo-indicator bg-warning"></div>-->
      <!--        <div class="widget-content p-0">-->
      <!--          <div class="widget-content-wrapper">-->
      <!--            <div class="widget-content-left mr-2">-->
      <!--              <div class="custom-checkbox custom-control"> <input class="custom-control-input" id="exampleCustomCheckbox12" type="checkbox"><label class="custom-control-label" for="exampleCustomCheckbox12">&nbsp;</label> </div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-left">-->
      <!--              <div class="widget-heading">Call Sam For payments <div class="badge badge-danger ml-2">Rejected</div>-->
      <!--              </div>-->
      <!--              <div class="widget-subheading"><i>By Bob</i></div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </li>-->
      <!--      <li class="list-group-item">-->
      <!--        <div class="todo-indicator bg-focus"></div>-->
      <!--        <div class="widget-content p-0">-->
      <!--          <div class="widget-content-wrapper">-->
      <!--            <div class="widget-content-left mr-2">-->
      <!--              <div class="custom-checkbox custom-control"><input class="custom-control-input" id="exampleCustomCheckbox1" type="checkbox"><label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label></div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-left">-->
      <!--              <div class="widget-heading">Make payment to Bluedart</div>-->
      <!--              <div class="widget-subheading">-->
      <!--                <div>By Johnny <div class="badge badge-pill badge-info ml-2">NEW</div>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </li>-->
      <li class="list-group-item">
        <div class="todo-indicator bg-primary"></div>
        <div class="widget-content p-0">
          <div class="widget-content-wrapper">
            <div class="widget-content-left mr-2">
              <div class="custom-checkbox custom-control"><input class="custom-control-input"
                                                                 id="exampleCustomCheckbox4" type="checkbox"><label
                class="custom-control-label" for="exampleCustomCheckbox4">&nbsp;</label></div>
            </div>
            <div class="widget-content-left flex2">
              <div class="widget-heading">{{ todo.name }}</div>
              <div class="widget-subheading">By Tester</div>
            </div>
            <div class="widget-content-right">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Dropdown
              </button>

              <div class=" dropdown-menu">
                <button type="button" class="dropdown-item" data-toggle="modal" data-target="#detailModal"
                        @click="getDetail(todo)">상세보기
                </button>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item" @click="deleteTodo(todo, index)">삭제</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!--      <li class="list-group-item">-->
      <!--        <div class="todo-indicator bg-info"></div>-->
      <!--        <div class="widget-content p-0">-->
      <!--          <div class="widget-content-wrapper">-->
      <!--            <div class="widget-content-left mr-2">-->
      <!--              <div class="custom-checkbox custom-control"><input class="custom-control-input" id="exampleCustomCheckbox2" type="checkbox"><label class="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label></div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-left">-->
      <!--              <div class="widget-heading">Office grocery shopping</div>-->
      <!--              <div class="widget-subheading">By Tida</div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </li>-->
      <!--      <li class="list-group-item">-->
      <!--        <div class="todo-indicator bg-success"></div>-->
      <!--        <div class="widget-content p-0">-->
      <!--          <div class="widget-content-wrapper">-->
      <!--            <div class="widget-content-left mr-2">-->
      <!--              <div class="custom-checkbox custom-control"><input class="custom-control-input" id="exampleCustomCheckbox3" type="checkbox"><label class="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label></div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-left flex2">-->
      <!--              <div class="widget-heading">Ask for Lunch to Clients</div>-->
      <!--              <div class="widget-subheading">By Office Admin</div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </li>-->
      <!--      <li class="list-group-item">-->
      <!--        <div class="todo-indicator bg-success"></div>-->
      <!--        <div class="widget-content p-0">-->
      <!--          <div class="widget-content-wrapper">-->
      <!--            <div class="widget-content-left mr-2">-->
      <!--              <div class="custom-checkbox custom-control"><input class="custom-control-input" id="exampleCustomCheckbox10" type="checkbox"><label class="custom-control-label" for="exampleCustomCheckbox10">&nbsp;</label></div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-left flex2">-->
      <!--              <div class="widget-heading">Client Meeting at 11 AM</div>-->
      <!--              <div class="widget-subheading">By CEO</div>-->
      <!--            </div>-->
      <!--            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </li>-->
    </ul>

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
        isReadonly: true,
      }
    },
    methods: {
      deleteTodo(todo, index) {
        this.$http.delete('http://localhost:8226/api/delete/' + index)
          .then((result) => {
            if (result.data.success) {
              // this.getTodoList()
            }
          })
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
            // this.getTodoList()
          })
          this.name = null
        }
      },
      getTodoList() {
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
      this.getTodoList();
    },
    updated() {
      this.getTodoList();
    }
  }
</script>
