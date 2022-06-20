<template>
  <div class="container shopHome">
    <ShopIsotope v-bind:product-data="productlist" />
  </div>
</template>
<script>
import ShopIsotope from "@/components/shop/ShopIsotope.vue";
export default {
  name: "ShopHome",
  components: {
    ShopIsotope
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
              productCost: "$35.31"
            }
          ]
        },
        {
          tabName: "Parfum",
          product: [
            {
              productImg: "img3.jpg",
              productName: "Esprit Ruffle Shirt",
              productCost: "$16.64"
            }
          ]
        },

        {
          tabName: "Sac a poubelle",
          product: [
            {
              productImg: "img6.jpg",
              productName: "Esprit Ruffle Shirt",
              productCost: "$16.64"
            }
          ]
        },
        {
          tabName: "Ciment",
          product: [
            {
              productImg: "img5.jpg",
              productName: "CIMENT PARENN",
              productCost: "$35.31"
            }
          ]
        },
        {
          tabName: "Bracelet",
          product: [
            {
              productImg: "img7.jpg",
              productName: "BRACELET PARENN",
              productCost: "$35.31"
            }
          ]
        },
        {
          tabName: "Camion décharge",
          product: [
            {
              productImg: "img8.jpg",
              productName: "CAMION DÉCHARGE PARENN",
              productCost: "$35.31"
            }
          ]
        }
      ]
    };
  }
};
</script>
