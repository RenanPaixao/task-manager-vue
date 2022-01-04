<template>
  <div>
      <input id="autoComplete" @focus="toggleOptions"
             @blur="toggleOptions"
             :value="initialValueLocal"
             class="autoCompleteSize"
             readonly
             autocomplete="off" />
      <ul v-if="showOptions" class="lookOptionsContainer">
        <li v-for="statusSingle in status" :key="statusSingle.id"
            @click="optionSelect"
            class="lookOptions py-1"
        >
          {{ statusSingle.value }}
        </li>
      </ul>
  </div>
</template>

<script>
import taskStatus from '../Utils/taskStatus';

export default {
  name: 'AutoComplete.vue',
  props: {
    initialValue: String
  },
  created() {
    if (this.initialValue) this.initialValueLocal = this.initialValue;
  },
  data() {
    return {
      initialValueLocal: '',
      status: [
        { id: 1, value: taskStatus.TO_DO },
        { id: 2, value: taskStatus.IN_PROGRESS },
        { id: 3, value: taskStatus.DONE }
      ],
      showOptions: false
    };
  },
  methods: {
    toggleOptions() {
      if (this.showOptions) {
        // It avoid the blur event overwrite the click on options
        setTimeout(() => {
          this.showOptions = !this.showOptions;
        }, 150);
        return;
      }
      this.showOptions = !this.showOptions;
    },
    optionSelect(event) {
      this.initialValueLocal = event.target.innerText;
      this.$emit('optionSelect', this.initialValueLocal);
    }
  },
  watch: {
    initialValue() {
      this.initialValueLocal = this.initialValue;
    }
  }
};
</script>

<style scoped>
.autoCompleteSize {
  max-width: 100px;
}
.lookOptionsContainer {
  width: 100px;

  padding: 0;
  text-align: center;
  position: absolute;

  background-color: #fff;
  list-style: none;
  white-space: nowrap;
}
.lookOptions {
}
.lookOptions:hover{
  color: cornflowerblue;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: cornflowerblue;
  cursor: pointer;
}
</style>
