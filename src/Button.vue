<template>
  <v-btn
    :id="generateId(title)"
    class="mr-2"
    variant="outlined"
    @click="callFunctionCopy"
  >
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

const generateId = (title) => {
  // Sử dụng title để tạo id
  return `button-${title.replace(/\s+/g, "-").toLowerCase()}`;
};
</script>

<style lang="scss" scoped></style>
