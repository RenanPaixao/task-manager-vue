<template>
  <Header class="primary" msg="Requisições Http no vue " />
  <Task-manager class="primary"/>
</template>

<script>
import Header from './components/Header.vue';
import TaskManager from './components/TaskManager.vue';

export default {
  name: 'App',
  components: {
    Header,
    TaskManager
  }
};
</script>
<style scoped>
.primary {
  background-color: #c8b8db;
}
</style>
