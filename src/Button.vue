<template>
  <v-btn class="mr-2" variant="outlined" @click="callFunctionCopy">
    {{ title }}
  </v-btn>
</template>

<script setup>
const props = defineProps({
  title: String,
  handleFunction: Function,
});

const callFunctionCopy = () => {
  props.handleFunction();
};
</script>

<style lang="scss" scoped></style>
