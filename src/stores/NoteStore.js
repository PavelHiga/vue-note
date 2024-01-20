import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const API = "https://64c13d00fa35860baea0471b.mockapi.io/tasks/";

export const useNoteStore = defineStore("taskStore", () => {
  const status = ref("");
  const notes = ref([]);

  const getNotes = async () => {
    status.value = "loading";
    try {
      const res = await axios.get(API);
      notes.value = res.data;
      status.value = "success";
    } catch (error) {
      console.log(error);
      status.value = "error";
    }
  };

  const getNoteById = async (id) => {
    status.value = "loading";
    try {
      const res = await axios.get(API + id);
      notes.value = res.data;
      status.value = "success";
    } catch (error) {
      console.log(error);
      status.value = "error";
    }
  };

  const postNote = async (data) => {
    status.value = "loading";
    try {
      const res = await axios.post(API, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      notes.value.push(res.data);
      status.value = "success";
    } catch (error) {
      console.log(error);
      status.value = "error";
    }
  };

  const deleteNote = async (id) => {
    status.value = "loading";
    try {
      const res = await axios.delete(API + id);
      notes.value = notes.value.filter((el) => el.id !== id);
      status.value = "success";
    } catch (error) {
      console.log(error);
      status.value = "error";
    }
  };

  return {
    status,
    notes,
    getNotes,
    getNoteById,
    postNote,
    deleteNote,
  };
});
