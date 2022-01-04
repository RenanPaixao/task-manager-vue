<template>
  <div>
    <TitleHeader>Edit Task</TitleHeader>
    <div class='d-flex justify-content-center align-items-center internalContainer mx-auto'>
      <input class="mr-2" v-model="taskLocal.title"/>
      <AutoComplete @optionSelect="changeStatus" :initialValue="task.status"/>
      <Button white @click="saveEditing" class="ml-2">Save Edit</Button>
      <Button @click="cancelEdit" white danger class="ml-2">Cancel</Button>
    </div>
  </div>
</template>

<script>
import AutoComplete from './AutoComplete.vue';
import Button from './Button.vue';
import TitleHeader from './TitleHeader.vue';

export default {
  name: 'EditTask',
  props: {
    task: Object
  },
  data() {
    return {
      taskLocal: { ...this.task }
    };
  },
  components: {
    AutoComplete,
    Button,
    TitleHeader
  },
  methods: {
    cancelEdit() {
      this.$emit('cancelEdit');
    },
    saveEditing() {
      this.taskLocal.title = this.taskLocal.title.trim();
      this.$emit('taskEdit', this.taskLocal);
    },
    changeStatus(payload) {
      this.taskLocal.status = payload;
    }
  }
};
</script>

<style scoped>
.internalContainer{
  height: 100px;
}
</style>
