<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader },
};
</script>

<template>
  <content-loader
    class="loader"
    viewBox="0 0 300 300"
    :speed="3"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="20" y="20" rx="5" ry="5" width="256" height="30" />
    <rect x="20" y="73" rx="5" ry="5" width="256" height="160" />
    <rect x="19" y="260" rx="5" ry="5" width="256" height="25" />
  </content-loader>
</template>

<style scoped>
.loader {
  width: 300px;
  border: 2px solid rgb(215, 215, 215);
  border-radius: 12px;
}
</style>
