<template>
  <div>
    <div class="task-status__header">
      <input type="radio" id="all" name="status" value="0" v-model="disp" />
      <label for="all">すべて</label>
      <input type="radio" id="working" name="status" value="1" v-model="disp" />
      <label for="working">作業中</label>
      <input type="radio" id="done" name="status" value="2" v-model="disp" />
      <label for="done">完了</label>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.content }}</td>
          <td>
            <button @click="changeDone(task.id)">
              {{ currStatus(task.done) }}
            </button>
          </td>
          <td><button @click="deleteTask(task.id)">削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      disp: 0,
    };
  },
  computed: {
    ...mapGetters(['allTasks', 'doneTasks', 'notDoneTasks']),
    tasks() {
      switch (Number(this.disp)) {
        case 0:
          return this.allTasks;
        case 1:
          return this.notDoneTasks;
        case 2:
          return this.doneTasks;
        default:
          return null;
      }
    },
    currStatus() {
      return function(done) {
        if (done) {
          return '完了';
        } else {
          return '作業中';
        }
      };
    },
  },
  methods: {
    ...mapActions(['changeDone', 'deleteTask']),
  },
};
</script>
