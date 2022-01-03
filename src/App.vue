<template>
  <AppHeader class="primary" msg="Requisições Http no vue " />
  <Task-manager class="primary"/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TaskManager from './components/TaskManager.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    TaskManager
  }
};
</script>
<style scoped>
.primary {
  background-color: #c8b8db;
}
</style>
