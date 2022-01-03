<template>
  <div class="container mx-auto py-5">
    <h1 class="ml-4">{{ msg }}</h1>
    <p class="ml-4">Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.</p>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  margin: auto 0;
}
</style>
