<template>
  <button class="btn btn-sm mr-1" :class="applyClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    white: Boolean,
    danger: Boolean
  },
  computed: {
    applyClass() {
      if (this.white && this.danger) {
        return 'whiteButton dangerHover';
      }
      if (this.white) {
        return 'whiteButton';
      }
      if (this.danger) {
        return 'dangerHover blackButton';
      }
      return 'blackButton';
    }
  }
};
</script>

<style scoped>
button {
  white-space: nowrap;
  margin: 0;
}
.whiteButton{
  color: white;
  border-color: white;
}
.blackButton {
  border: #555 1px solid;
  color: #555;
}
button:hover {
  color: cornflowerblue;
  border-color: cornflowerblue;
}
.dangerHover:hover {
  border-color: #dc3545;
  color: #dc3545;
}
</style>
