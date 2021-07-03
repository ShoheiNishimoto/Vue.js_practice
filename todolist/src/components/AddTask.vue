<template>
  <div>
    <h2>新規タスクの追加</h2>
    <div class="addTaskArea">
      <input type="text" v-model="val.coment"/>
      <button class="btn" @click="addTask(val)">追加</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      val: {
        coment: '',
      },
    }
  },
  methods: {
    ...mapActions(['addTask']),
  },
};
</script>

<style scoped>
.addTaskArea {
  display: flex;
}
.btn {
  margin-left: 5px;
}
</style>
