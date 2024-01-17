<template>
  <div>
    <form class="form" action="">
      <input
        v-model="data.title"
        class="title"
        maxlength="24px"
        placeholder="Заголовок"
        type="text"
      />
      <textarea
        v-model="data.text"
        class="text"
        placeholder="Текст..."
        maxlength="450"
      />
      <div class="footer">
        <input
          class="date"
          placeholder="ДД.ММ.ГГГГ"
          maxlength="19"
          type="text"
        />
      </div>
    </form>
    <button
      @click="handleSubmit"
      :disabled="!isDisabled"
      class="button"
      :class="{ disabled: !isDisabled }"
    >
      Создать
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useNoteStore } from "../stores/NoteStore";

const route = useRouter();
const noteStore = useNoteStore();

const data = ref({
  title: "",
  text: "",
  date: "",
  name: "",
});

const handleSubmit = () => {
  noteStore.postNote(data.value);
  route.push("/");
};

const isDisabled = computed(() => {
  return (
    data.value.title || data.value.text || data.value.date || data.value.name
  );
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  padding: 35px;
  margin: 75px auto 0 auto;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 12px;
}

.title {
  width: calc(100%-10px);
  padding: 5px;
  font-weight: 600;
  font-size: 2em;
  line-height: 1.1;
}
.text {
  width: calc(100%-20px);
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.5;
  height: 60%;
  padding: 10px;
  resize: none;
  word-wrap: break-word;
}

.footer {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: 500;
}

.date {
  width: 45%;
}

.button {
  width: 500px;
  margin-top: 20px;
  background: #fff;
  backface-visibility: hidden;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.875rem 1.125rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s, background-color 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:hover {
  background-color: #e6e6e6;
}
.button:focus {
  outline: 0 solid transparent;
}

.button:focus:before {
  content: "";
  left: calc(-1 * 0.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1 * 0.375rem);
  transition: border-radius;
  user-select: none;
}

.button:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button:focus:not(:focus-visible):before {
  border-width: 0;
}

.button:not(:disabled):active {
  transform: translateY(0.125rem);
}

.disabled {
  cursor: not-allowed;
  width: 500px;
  margin-top: 20px;
  background: #fff;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: #b6b6b6;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.875rem 1.125rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s, background-color 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>
