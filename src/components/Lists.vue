<template>
  <div class="lists">
    <h1>Create List</h1>
    <button class="btn" v-on:click="truthClass = !truthClass">+</button>
    <div class="modal modal-lg" v-bind:class="{active: truthClass}">
      <div class="modal-overlay"></div>
      <div class="modal-container">
          <div class="modal-header">
              <button class="btn btn-clear float-right" v-on:click="truthClass = !truthClass"></button>
              <div class="modal-title">
                <h1 class="text-center">Create List</h1>
              </div>
          </div>
          <div class="modal-body grid-960">
              <div class="content">
                <div class="columns">
                  <div class="column col-6">

                    <ul class="tab tab-block">
                      <li class="tab-item" v-for="tab in tabs" v-bind:class="[ tab.isActive ? activeClass:'']" v-on:click="activeTabs(tab)">
                          <a href="#">{{tab.text}}</a>
                      </li>
                  </ul>
                    <div v-if="tabs[0].isActive">
                      <select class="form-select" v-model="selected">
                        <!-- <option v-on:click="customColor = false, list.color = 'Red'">Red</option>
                        <option v-on:click="customColor = false, list.color = 'Blue'">Blue</option>
                        <option v-on:click="customColor = false, list.color = 'Green'">Green</option>
                        <option v-on:click="customColor = false, list.color = 'Yellow'">Yellow</option> -->
                        <option v-for="option in colorOptions" v-on:click="customColor = false, list.color = option.text">
                          {{option.text}}
                        </option>
                        <option v-on:click="customColor = true">Custom...</option>
                      </select>
                      <br />
                      <br />
                      <div v-if="customColor">
                        <label for="colorPicker">Pick your favorite color:</label>
                        <input class="form-input" type="color" v-model="list.color" name="colorPicker">
                      </div>

                    </div>

                <input v-if="tabs[1].isActive" class="form-input "type="text" v-model="list.title" placeholder='Title' name="chooseTitle" />
                <textarea v-if="tabs[2].isActive" v-model="list.tasks" class="form-input" placeholder="Tasks" name="task-holder" rows="10"></textarea>

         </div>
         <div class="column col-2">
         </div>

         <div class="column col-4">
           <div class='box' v-bind:style='{backgroundColor: list.color}'>
             <h3 class='text-center'>{{ list.title }}</h3>
               <p style="white-space: pre">{{ list.tasks }}</p>
           </div>
              </div>
            </div>
          </div>
          </div>
          <div class="modal-footer float-left">
                <button class="btn btn-primary" v-on:click="addList(), truthClass = !truthClass">Create</button>
          </div>
      </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Lists',
  data() {
    return {
      list :
        {color: '', title: '', tasks: ''}
      ,
      // colorOptions: [
      //   { text: 'Blue', value: 'Blue'},
      //   { text: 'Red', value: 'Red'},
      //   { text: 'Green', value: 'Green'},
      //   { text: 'Custom', value: this.picker}
      // ],
      tabs: [
        { text: 'Color', isActive: false},
        { text: 'Title', isActive: false },
        { text: 'Tasks', isActive: false }
      ],
      activeClass: 'active',
      truthClass: false,
      customColor: false,
      colorOptions: [
        { text: 'Red'},
        { text: 'Blue'},
        { text: 'Green'},
        { text: 'Yellow'}
      ],
      selected: ''
    }
  },
  methods: {
    addList: function() {
      this.$http.get('https://api.myjson.com/bins/fgbk9')
      .then (function(res) {
        const lists = res.body;
        lists.push(this.list);
        this.$http.put('https://api.myjson.com/bins/fgbk9', lists)
      })
      // .catch ((error)=> console.log(error))
    },
    activeTabs: function(currentTab) {
      currentTab.isActive = true;
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] !== currentTab) {
            this.tabs[i].isActive = false;
        }
      }
    },
    testa: function() {
      return `<input class="form-input" type="color">`
    }
}
}

</script>

<style scoped>

.box {
  height: 400px;
  padding: 1em;
  overflow-y: auto;
  border: black solid;
}

h3, p {
  word-wrap: break-word;
}

textarea {
  resize: none;
}

.modal-lg .modal-container {
  width: 1024px;
}


</style>
