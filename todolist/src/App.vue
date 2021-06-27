<template>
  <div id="app">
    <header><h1>ToDoリスト</h1></header>
    <main>
      <SwitchState />
      <Add />
    </main>
  </div>
</template>

<script>
import SwitchState from './components/SwitchStatus.vue';
import Add from './components/Add.vue';

export default {
  name: 'App',
  components: {
    SwitchState,
    Add,
  },
};
</script>

<style scoped>
.mainContainer {
  width: 800px;
  margin: 50px auto;
}
</style>
