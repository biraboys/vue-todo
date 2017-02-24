<template>
  <div id="addtodo">

    <button class="btn" id="createTodoForm" v-on:click="toggleCreateTodoForm">Skapa Todo</button>
    <div class="columns" id="todoForm" v-if="isActive">
        <div class="column col-12">
            <form action="#forms" id="tForm">
                <div class="form-group">
                    <label class="form-label" for="input-example-1">Titel på todo</label>
                    <input class="form-input" type="text" id="input-one" placeholder="Lägg till todo.." v-model="message" v-on:keydown="checkInput" value="">
                </div>
                <div class="form-group">
                    <select class="form-select col-12" id="input-two">
                        <option>Välj prioritet</option>
                        <option>Hög</option>
                        <option>Medel</option>
                        <option>Låg</option>
                    </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-example-1">Deadline för todo</label>
                  <input class="form-input" type="date" id="input-three" value="">
                </div>
                <div class="form-group">
                    <label class="form-label" for="input-example-3">Övrig info om todo</label>
                    <textarea class="form-input" id="input-four" placeholder="Information.." rows="3"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit" v-on:click="submitTodo">Submit</button>
                    <button class="btn btn-link" type="reset" v-on:click="resetTodoForm">Cancel</button>
                    <span class="label label-success hide" id="todoCreated">Todo skapad!</span>
                </div>
            </form>
        </div>
    </div>
    <div id="todoItem"></div>

  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      isActive: false,
      id: -1,
      message: '',
      bgCol: '',
      todos: []
    }
  },
  methods: {
    toggleCreateTodoForm: function(){
      var todoForm = document.getElementById('toggleCreateTodoForm');
      var todoFormButton = document.getElementById('createTodoForm');
      if(this.isActive === false){
        this.isActive = true;
        todoFormButton.innerHTML = 'Stäng Todo';
      } else {
        this.isActive = false;
        todoFormButton.innerHTML = 'Skapa Todo';
      }
    },
    submitTodo: function(){
      var inputOne = document.getElementById('input-one').value.trim();
      var inputTwo = document.getElementById('input-two').value;
      if (inputTwo === "Välj prioritet"){
        inputTwo = '';
      }
      var inputThree = document.getElementById('input-three').value;
      var inputFour = document.getElementById('input-four').value;
      if(inputOne.length > 0 && inputOne.length <= 30){
        document.getElementById('input-one').className = 'form-input';
        document.getElementById('input-one').placeholder = 'Lägg till todo..';
        document.getElementById('tForm').reset();
        document.getElementById('todoCreated').className = 'label label-success visible';
        this.id += 1;
        return this.createTodo(inputOne, inputTwo, inputThree, inputFour, this.id);
      } else {
        var inputFieldOne = document.getElementById('input-one');
        inputFieldOne.className += ' is-danger';
        inputFieldOne.placeholder = 'Vänligen ange todo här..';
      }
    },
    createTodo: function(title, prio, date, info, id){
      this.todos.push({id: id, title: title, prio: prio, date: date, info: info});
      var elTodo = document.createElement('div');
      elTodo.innerHTML = "<div class='column col-sm-12'>" + "<div class='toast toast-primary'>" + "<button id='"+ id + "' class='btn btn-clear float-right  tooltip tooltip-left' data-tooltip='Radera Todo' onclick='deleteTodo(event)'></button>"+ "<h4>" + title + "</h4>" + "<p>" + info + "</p>" + "</div>" + "</div>";
      document.getElementById('todoItem').appendChild(elTodo);
    },
    resetTodoForm: function(){
      document.getElementById('tForm').reset();
      document.getElementById('input-one').className = 'form-input';
      document.getElementById('input-one').placeholder = 'Lägg till todo..';
      document.getElementById('todoCreated').className = 'label label-success hide';
    },
    checkInput: function(){
      if(this.message.length > 0){
        document.getElementById('todoCreated').className = 'label label-success hide';
      }
    }
  }
}
</script>

<style scoped>
h4{
	margin-top: 0!important;
}
</style>
