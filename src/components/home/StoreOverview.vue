<!-- eslint-disable prettier/prettier -->

<template>
  <section class="sec-product bg0 p-b-80">
    <div class="container">
      <div class="p-b-32">
        <h3 class="ltext-105 cl5 txt-center respon1">Nos produits</h3>
      </div>
      <!-- Store overview tab -->
      <div class="store-overview-tab">
        <b-tabs content-class="p-t-43">
          <b-tab
            v-for="(item, index) in category"
            v-bind:title="item.name"
            v-bind:key="index"
            v-bind:class="{ active: currentActiveTab == item.tabName }"
            @click="setCurrentTab(item.tabName)"
          >
            <StoreOverviewCarousel
              style="i"
              v-if="currentActiveTab == item.tabName"
              v-bind:current-tab-data="item"
            />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import StoreOverviewCarousel from "@/components/home/StoreOverviewCarousel.vue";
import axios from "axios";
const HOST = "https://parren.herokuapp.com/";
axios.defaults.baseURL = HOST;
const url = {
  getAllCategory: "category/",
  getAllProduct: "product/show",
  getProductsByCategory: "product/category/",
};

axios
  .get(url.getAllCategory)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

export default {
  name: "StoreOverview",
  components: {
    StoreOverviewCarousel,
  },
  data() {
    return {
      tabListData: [
        {
          tabName: "Eau en bouteille",
          product: [
            {
              productImg: "img4.jpg",
              productName: "Herschel supply",
              productCost: "$35.31",
            },
          ],
        },
      ],
      currentActiveTab: "Best Seller",
      category: [], 
    };
  },
  methods: {
    setCurrentTab(tabName) {
      this.currentActiveTab = tabName;
      axios
        .get(url.getProductsByCategory + tabName)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get(url.getAllCategory)
      .then((response) => {
        const category = response.data.results;
        this.category = category;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
