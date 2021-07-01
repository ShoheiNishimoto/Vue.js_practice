<template>
  <div id="app">
    <header><h1>ToDoリスト</h1></header>
    <main>
      <SwitchState />
      <AddTask />
    </main>
  </div>
</template>

<script>
import SwitchState from './components/SwitchStatus.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    SwitchState,
    AddTask,
  },
};
</script>

<style scoped>
.mainContainer {
  width: 800px;
  margin: 50px auto;
}
</style>
