<template>
  <div id="test">
<!-- menu divider -->
<div class="columns">
  <div class="column col-2">
    <ul class="menu menu-whole-page">
      <li class="menu-item">
          <div class="chip">
              <div class="chip-icon">
                <i class="fa fa-tasks" aria-hidden="true"></i>
              </div>
              <div class="chip-content">
                  Task Board
              </div>
          </div>
      </li>
      <li class="divider"></li>
        <div class="form-group">
            <select class="form-select">
                <option>February</option>
                <option>March</option>
                <option>April</option>
            </select>
              <i class="fa fa-calendar " aria-hidden="true"></i>
        </div>

      <li class="menu-item">
          <a href="#menus" class="active">
              Week 1
          </a>
      </li>
      <li class="menu-item">
          <a href="#menus">
              Week 2
          </a>
      </li>
      <li class="menu-item">
          <a href="#menus">
              Week 3
          </a>
      </li>
      <li class="menu-item">
          <a href="#menus">
              Week 4
          </a>
      </li>
  </ul>
  </div>

<div class="column col-10">
  <header class="navbar navbar-grey">
  <section class="navbar-section">
    <div class="input-group input-inline">
        <input class="form-input" type="text" placeholder="Search lists..." />
        <button class="btn btn-primary input-group-btn">  <i class="fa fa-search" aria-hidden="true"></i></button>
    </div>

  </section>
  <section class="navbar-section">
      <a href="#" class="pr-10"><i class="fa fa-cog fa-2x" aria-hidden="true"></i></a>
      <a href="#" class="pl-10 pr-10"><i class="fa fa-power-off fa-2x" aria-hidden="true"></i></a>
  </section>
</header>
    <div class="columns">
    <div class="column col-3" v-for="list in lists">
      <div class='box' v-bind:style='{backgroundColor: list.color}'>
        <h3 class='text-center'>{{ list.title }}</h3>
          <p style="white-space: pre">{{ list.tasks }}</p>
      </div>
  </div>
      </div>
  </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      lists : [
      ]
    }
  },
  methods: {
  },

  created: function() {
  this.$http.get('https://api.myjson.com/bins/fgbk9')
  .then(function(response) {
        this.lists = response.body
  });

    // console.log(response.data)
  //   .catch(err =>
  //   console.log(err)
  // )
  }
}

</script>

<style scoped>
.box {
  height: 400px;
  width: 300px;
  padding: 1em;
  overflow-y: auto;
  border: black solid;
  margin: 0.5em;
}


.navbar-grey {
  background-color: rgb(248, 248, 248);
}

.menu-whole-page {
  height: 100vh;
}
</style>
