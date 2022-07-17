<template>
  <div class="card-container">
    <img :src="getImageUrl(item.image)" alt="" width="50%" height="50%" />
    <h1 class="card-title">{{ item.name }}</h1>
    <h4 class="card-description">{{ item.description }}</h4>
  </div>
</template>

<script>
import { imageBuild } from "../../utils/builder";
export default {
  name: "ProductCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImageUrl(image) {
      return imageBuild(image);
    }
  }
};
</script>

<style scoped>
.card-container {
  width: 400px;
  height: 100%;
  margin: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.card-title {
  font-size: 1.5em;
  font-weight: bold;
}
.card-description {
  font-size: 1em;
}
</style>
