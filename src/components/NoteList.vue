<template>
  <div>
    <div v-if="noteStore.status === 'loading'" class="wrapper">
      <div v-for="item in skeletonArr" :key="item">
        <NoteListSkeleton />
      </div>
    </div>
    <div v-else class="wrapper">
      <div v-for="{ id, title, text, date } in data" :key="id">
        <NoteListItem :id="id" :title="title" :text="text" :date="date" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNoteStore } from "../stores/NoteStore";
import NoteListItem from "./NoteListItem.vue";
import NoteListSkeleton from "./NoteListSkeleton.vue";

defineProps({
  data: Array,
});

const noteStore = useNoteStore();
const skeletonArr = computed(() => {
  return [...new Array(6)];
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
