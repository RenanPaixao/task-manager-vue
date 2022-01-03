<template>
  <div class="d-flex justify-content-center mt-5">
    <ul v-if="tasksLocal.length > 0" class="mx-auto py-2 w-75">
      <Task v-for="task in tasksLocal" class="mt-2 mx-auto w-75 border border-white"
            :task="task" :key="task.id"
            @edit="reEmit"
      />
    </ul>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'TaskList',
  components: {
    Task
  },
  props: {
    tasks: Array
  },
  data() {
    return {
      tasksLocal: [...this.tasks]
    };
  },
  methods: {
    reEmit(payload) {
      this.$emit('editTask', payload);
    }
  },
  watch: {
    tasks() {
      this.tasksLocal = [...this.tasks];
    }
  }
};
</script>

<style scoped>
  ul{
    padding: 0;
  }
</style>
