<template>
  <div class="pb-2 containerSize">
    <div class="mt-5">
      <div class="d-flex justify-content-center mb-2">
        <Button white class="w-25 mt-3" @click="toggleCreateTask">{{plusMinus}} Add task</Button>
      </div>
      <AddTask v-if="showCreateTask" @createTask="addTask" class="mx-auto containerStyle" />
    </div>
    <TaskList v-if="!isFetching && tasks.length > 0"
              :tasks="tasks"
              :key="reloadTaskList"
              @editTask="editTask"
              @deleteTask="deleteTask"
              @toggleDo="saveTaskEdit"/>
    <p v-else class="paragraphStyle mt-5">We haven't tasks yet</p>
    <EditTask v-if="isEditing"
              @cancelEdit="hideEdit"
              @taskEdit="saveTaskEdit"
              :task="taskEditing"
              class="containerStyle mx-auto"
    />
  </div>
</template>
<script>
import axios from 'axios';
import config from '../config';
import AddTask from './AddTask.vue';
import TaskList from './TaskList.vue';
import Button from './Button.vue';
import EditTask from './EditTask.vue';

export default {
  name: 'TaskManager',
  components: {
    AddTask,
    TaskList,
    Button,
    EditTask
  },
  data() {
    return {
      tasks: [],
      taskEditing: {},
      isFetching: true,
      isEditing: false,
      showCreateTask: false,
      reloadTaskList: false
    };
  },
  computed: {
    plusMinus() {
      return this.showCreateTask ? '-' : '+';
    }
  },
  created() {
    axios.get(`${config.urlBase}/tasks`).then((e) => {
      this.tasks = e.data;
      this.isFetching = false;
    });
  },
  methods: {
    addTask(newTask) {
      axios.post(`${config.urlBase}/tasks`, newTask).then((res) => {
        this.tasks.push(res.data);
        this.refreshTaskList();
      });
    },
    editTask(payload) {
      this.taskEditing = payload;
      this.isEditing = true;
    },
    saveTaskEdit(payload) {
      axios.patch(`${config.urlBase}/tasks/${payload.id}`, payload).then(() => {
        const indexToUpdate = this.tasks.findIndex((e) => e.id === payload.id);
        this.tasks.splice(indexToUpdate, 1, payload);
        this.hideEdit();
        this.refreshTaskList();
      }).catch(() => console.error('Some error occurred when creating a task. Try again!'));
    },
    deleteTask(payload) {
      const confirm = window.confirm(`Have you sure to delete the task "${payload.title}"?`);
      if (confirm) {
        axios.delete(`${config.urlBase}/tasks/${payload.id}`).then(() => {
          const indexToUpdate = this.tasks.findIndex((e) => e.id === payload.id);
          this.tasks.splice(indexToUpdate, 1);
          this.refreshTaskList();
        });
      }
    },
    hideEdit() {
      this.isEditing = false;
    },
    toggleCreateTask() {
      this.showCreateTask = !this.showCreateTask;
    },
    refreshTaskList() {
      this.reloadTaskList = !this.reloadTaskList;
    }
  }
};
</script>
<style scoped>
.containerStyle {
  width: 55%;
  border: 2px solid white;
}
.containerSize{
  min-height: 710px;
}
.paragraphStyle{
  text-align: center;
  color: #fff;
}
</style>
