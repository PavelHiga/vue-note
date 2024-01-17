<template>
  <div class="wrapper">
    <div v-for="{ id, title, text, name, date } in data" :key="id">
      <Note :id="id" :title="title" :text="text" :name="name" :date="date" />
    </div>
  </div>
</template>

<script setup>
import Note from "./Note.vue";

defineProps({
  data: Array,
});
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-gap: 3vw;
  margin-top: 75px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-between;
  flex-flow: wrap;
}
</style>
