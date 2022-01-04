<template>
  <li class="d-flex task" :class="bgTask">
    <span class="w-100 my-auto pl-3 py-2"> {{ task.title }} </span>
    <span class="my-auto mr-4">{{ statusFormatted }}</span>
    <div class="d-flex">
      <Button @click="edit">Edit</Button>
      <Button @click="toggleDo">{{ doButtonText }}</Button>
      <Button @click="deleteTask" danger>delete</Button>
    </div>
  </li>
</template>
<script>
import TaskStatus from '../Utils/taskStatus';
import Button from './Button.vue';

export default {
  name: 'Task',
  components: {
    Button
  },
  props: {
    task: Object
  },
  data() {
    return {
      taskLocal: { ...this.task }
    };
  },
  computed: {
    bgTask() {
      if (this.taskLocal.status === TaskStatus.DONE) {
        return 'doneClass';
      }
      if (this.taskLocal.status === TaskStatus.IN_PROGRESS) {
        return 'inProgressClass';
      }
      return 'toDoClass';
    },
    doButtonText() {
      return this.taskLocal.status === TaskStatus.DONE ? 'Do again?' : 'Done';
    },
    statusFormatted() {
      return this.task.status.split(' ').map((e) => e.replace(e[0], e[0].toUpperCase())).join(' ');
    }
  },
  methods: {
    edit() {
      this.$emit('edit', this.taskLocal);
    },
    deleteTask() {
      this.$emit('delete', this.taskLocal);
    },
    toggleDo() {
      const { status } = this.taskLocal;
      if (status === TaskStatus.IN_PROGRESS || status === TaskStatus.TO_DO) {
        this.taskLocal.status = TaskStatus.DONE;
        this.$emit('toggleDo', this.taskLocal);
        return;
      }
      this.taskLocal.status = TaskStatus.TO_DO;
      this.$emit('toggleDo', this.taskLocal);
    }
  }
};
</script>
<style scoped>
.task {
  list-style: none;
}
.doneClass {
  background-color: #83c5be;
}
.inProgressClass {
  background-color: #e9d8a6;
}
.toDoClass{
  background-color: #edf6f9;
}
span{
  white-space: nowrap;
}
</style>
