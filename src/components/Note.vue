<template>
  <div class="note__wrapper" v-on-click-outside="closeEllement">
    <div v-if="isConfirm" class="confirm">
      <p @click="isConfirm = false" class="confirm__cancel">Отмена</p>
      <p @click="handeleDelete(id)" class="confirm__delete">Удалить</p>
    </div>
    <div v-else class="note">
      <p @click="$router.push('/' + id)" class="title">{{ title }}</p>
      <p class="text">
        {{ text }}
      </p>
      <div class="info">
        <p>{{ isDate }}</p>
        <div class="buttons">
          <p class="buttons__edit">Ред</p>
          /
          <p @click="isConfirm = true" class="buttons__delete">Удалить</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
import { useNoteStore } from "../stores/NoteStore";

const props = defineProps({
  id: String,
  title: String,
  text: String,
  name: String,
  date: Number | null,
});

const noteStore = useNoteStore();
const isConfirm = ref(false);

const isDate = computed(() => {
  return props.date != null ? props.date : "";
});

const closeEllement = () => {
  isConfirm.value = false;
};

const handeleDelete = (id) => {
  noteStore.deleteNote(id);
  noteStore.getNotes();
  isConfirm.value = false;
};
</script>

<style scoped>
.note__wrapper {
  display: flex;
  width: 300px;
  min-height: 300px;
  border: 2px solid black;
  border-radius: 12px;
  row-gap: 20px;
  padding: 20px;
  transition: transform 0.4s;
}

.note__wrapper:hover {
  transform: scale(1.05);
}

.note {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}

.confirm {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
}

.confirm__cancel {
  color: rgb(97, 166, 246);
  cursor: pointer;
}

.confirm__delete {
  color: rgb(253, 119, 119);
  cursor: pointer;
}
.title {
  text-align: left;
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
  text-decoration: underline;
  line-clamp: 1;
  cursor: pointer;
}

.info {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.header {
  display: flex;
  justify-content: space-between;
}

.buttons {
  display: flex;
  visibility: hidden;
  opacity: 0;
  font-size: 16px;
  font-weight: 500;
  column-gap: 5px;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
}
.note:hover .buttons {
  visibility: visible;
  opacity: 1;
}

.buttons__edit {
  cursor: pointer;
}
.buttons__edit:hover {
  color: rgb(97, 166, 246);
}

.buttons__delete {
  cursor: pointer;
}

.buttons__delete:hover {
  color: rgb(253, 119, 119);
}
</style>
