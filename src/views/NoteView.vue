<template>
  <h1>{{ $route.params.id }}</h1>
  <p>{{ noteStore.notes.title }}</p>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useNoteStore } from "../stores/NoteStore";

const route = useRoute();
const noteStore = useNoteStore();

onMounted(() => {
  noteStore.getNoteById(route.params.id);
});
</script>
