<template>
  <li class="d-flex task" :class="bgTask">
    <span class="w-100 my-auto pl-3 py-2"> {{ task.title }} </span>
    <span class="my-auto mr-4">{{ statusFormatted }}</span>
    <div class="d-flex">
      <Button @click="edit">Edit</Button>
      <Button>{{ doButtonText }}</Button>
      <Button danger>delete</Button>
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
      if (this.taskLocal.status === TaskStatus.Done) {
        return 'doneClass';
      }
      if (this.taskLocal.status === TaskStatus.InProgress) {
        return 'inProgressClass';
      }
      return 'toDoClass';
    },
    doButtonText() {
      return this.taskLocal.status === TaskStatus.Done ? 'Do again?' : 'Done';
    },
    statusFormatted() {
      return this.task.status.split(' ').map((e) => e.replace(e[0], e[0].toUpperCase())).join(' ');
    }
  },
  methods: {
    edit() {
      this.$emit('edit', this.taskLocal);
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
