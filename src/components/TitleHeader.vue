<template>
  <p class='title text-light mt-2'>
    <slot/>
  </p>
</template>

<script>
export default {
  name: 'TitleHeader'
};
</script>

<style scoped>
.title{
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
}
</style>
