<template>
  <div class="d-flex justify-content-center mt-5">
    <ul v-if="tasksLocal.length > 0" class="mx-auto py-2 w-75">
      <Task v-for="task in tasksLocal" class="mt-2 mx-auto w-75 border border-white"
            :task="task" :key="task.id"
            @edit="reEmit('editTask', $event)"
            @delete="reEmit('deleteTask', $event)"
            @toggleDo="reEmit('toggleDo', $event)"
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
    reEmit(eventName, payload) {
      this.$emit(eventName, payload);
    }
  }
};
</script>

<style scoped>
  ul{
    padding: 0;
  }
</style>
