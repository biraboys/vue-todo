<template>
  <div id="app">
  </div>
</template>

<script>
import Lists from './components/Lists'
import Test from './components/Test'
import Rock from './components/Rock'
import AddTodo from './components/AddTodo'

export default {
  name: 'app',
  components: {
    Lists,
    Test,
    Rock,
    AddTodo
  }
}
</script>

<style>
#app {
}
</style>
