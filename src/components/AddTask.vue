<template>
  <div>
    <TitleHeader>Create Task</TitleHeader>
      <div class="d-flex justify-content-center py-3">
        <input v-model="taskLocal.title" type="text" placeholder="Put title here" />
        <Button @click.prevent="createTask" class="ml-3">Create</Button>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import TitleHeader from './TitleHeader.vue';
import taskStatus from '../Utils/taskStatus';

export default {
  name: 'AddTask',
  components: {
    Button,
    TitleHeader
  },
  data() {
    return {
      taskLocal: { title: '', status: taskStatus.TO_DO }
    };
  },
  methods: {
    createTask() {
      if (this.taskLocal.title.trim() === '') {
        window.alert('The title is empty! Fill it');
        return;
      }
      this.$emit('createTask', this.taskLocal);
      this.taskLocal = { title: '', status: taskStatus.TO_DO };
    }
  }
};
</script>

<style scoped>
input {
  outline: none;
}
input:focus {
  border-color: #c8b8db;
}
</style>
