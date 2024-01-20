<template>
  <NoteList :data="noteStore.notes" />
</template>

<script setup>
import { onMounted } from "vue";
import NoteList from "../components/NoteList.vue";
import { useNoteStore } from "../stores/NoteStore";

const noteStore = useNoteStore();

onMounted(() => {
  noteStore.getNotes();
});
</script>
