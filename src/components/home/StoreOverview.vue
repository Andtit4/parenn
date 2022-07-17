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
            v-bind:class="{ active: currentActiveTab == item.name }"
            @click="setCurrentTab(item.name)"
          >
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <template v-if="isLoading" >
    <div class="flex text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    
    </template>
    <template v-else>
      <div class="flex flex-row flex-wrap">
        <div v-for="i in product"  v-bind:key="i" >
          <productCard :item="i"/>
        </div>
        <div v-if="product.length === 0">
          <h1 class="text-sm">Pas de produit disponible pour cette categories </h1>
        </div>
      </div> 
    </template>
    
    
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ProductCard from '@/components/home/Card.vue'
import { api } from '../../service'
import axios from 'axios'
const HOST = 'https://parren.herokuapp.com/'
axios.defaults.baseURL = HOST
const url = {
  getAllCategory: 'category/',
  getAllProduct: 'product/show',
  getProductsByCategory: 'product/category/'
}

axios
  .get(url.getAllCategory)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

export default {
  name: 'StoreOverview',
  components: {
    productCard: ProductCard
  },
  data () {
    return {
      tabListData: [
        {
          tabName: 'Eau en bouteille'
        }
      ],
      isLoading: true,
      currentActiveTab: 'Best Seller',
      category: [],
      product: [
        {
          image: 'img4.jpg',
          name: 'Herschel supply',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.',
          price  : '$35.31',
        }
      ]
    }
  },
  methods: {
    setCurrentTab (tabName) {
      this.startLoading()
      this.currentActiveTab = tabName
      const category = this.getCategoriesByTabName(tabName)
      console.log(category,tabName);
      axios
        .get(url.getProductsByCategory + category._id)
        .then((response) => {
          console.log("product for ",response)
          this.product = response.data.products
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.stopLoading()
        })
    },
    startLoading () {
      this.isLoading = true
    },
    stopLoading () {
      this.isLoading = false
    },
    getCategoriesByTabName (tabName) {
      const data = this.category.find((item) => item.name === tabName)
      console.log(data)
      return data
    }
  },
  mounted () {
    this.startLoading()
    api.getAllCategorys().then((response) => {
      console.log('response', response);
    })
    axios
      .get(url.getAllCategory)
      .then((response) => {
        const category = response.data.results
        this.category = category
        console.log(response)
        this.setCurrentTab(category[0].name)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        this.stopLoading()
      })
  }
}
</script>
