<template>
  <div class="shopIsotope">
    <div class="flex-w flex-sb-m p-b-52">
      <div class="flex-w flex-l-m filter-tope-group m-tb-10"></div>
      <div class="flex-w flex-c-m m-tb-10">
        <div
          class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4"
          @click="filterStatus()"
          :class="{ 'show-filter': filterToggleStatus }"
        >
          <i
            class="icon-filter cl2 m-r-6 fs-15 trans-04 fa fa-filter"
            v-show="!filterToggleStatus"
          ></i>
          <i
            class="icon-close-filter cl2 m-r-6 fs-15 trans-04 fa fa-times"
            v-show="filterToggleStatus"
          ></i>
          Filter
        </div>
        <div
          class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4"
          @click="searchStatus()"
          :class="{ 'show-search': searchToggleStatus }"
        >
          <i
            class="icon-search cl2 m-r-6 fs-15 trans-04 fa fa-search"
            v-show="!searchToggleStatus"
          ></i>
          <i
            class="icon-close-search cl2 m-r-6 fs-15 trans-04 fa fa-times"
            v-show="searchToggleStatus"
          ></i>
          Search
        </div>
      </div>
      <!-- Search product -->
      <div
        class="panel-search w-full p-t-10 p-b-15"
        v-show="searchToggleStatus"
      >
        <div class="bor8 dis-flex p-l-15">
          <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
            <i class="fa fa-search"></i>
          </button>
          <input
            class="mtext-107 cl2 size-114 plh2 p-r-15"
            type="text"
            name="search-product"
            placeholder="Search"
          />
        </div>
      </div>
      <!-- Filter -->
    </div>
    <isotope
      class="row isotope-grid"
      ref="shopIsotope"
      :item-selector="'isotope-item'"
      :list="list"
      :options="option"
      v-images-loaded:on.progress="layout"
      @filter="filterOption = arguments[0]"
    >
      <div
        v-for="(item, index) in list"
        v-bind:key="index"
        class="col-sm-6 col-md-4 col-lg-3 p-b-35"
        v-bind:class="[item.category]"
      >
        <!-- Block2 -->
        <div class="block2">
          <div class="block2-pic hov-img0">
            <img
              v-bind:src="getImgPath(item.productImg)"
              :alt="item.productName"
            />
            <router-link
              class="block2-btn flex-c-m stext-103 cl2 size-102 bgViolet bor2 hov-btn1 p-lr-15 trans-04"
              to="/shop/product"
            >
              Quick View
            </router-link>
          </div>
          <div class="block2-txt flex-w flex-t p-t-14">
            <div class="block2-txt-child1 flex-col-l ">
              <router-link
                class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                to="/shop/product"
              >
                {{ item.productName }}
              </router-link>
              <span class="stext-105 cl3">
                {{ item.productCost }}
              </span>
            </div>
            <div class="block2-txt-child2 flex-r p-t-3">
              <a
                href="#"
                class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              >
                <img
                  class="icon-heart1 dis-block trans-04"
                  src="@/assets/images/icons/icon-heart-01.png"
                  alt="ICON"
                />
                <img
                  class="icon-heart2 dis-block trans-04 ab-t-l"
                  src="@/assets/images/icons/icon-heart-02.png"
                  alt="ICON"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </isotope>
    <div v-if="nodataFlag" class="noDataContent">
      <h3>Sorry, there are no products matching your search.</h3>
    </div>
  </div>
</template>
<script>
import isotope from "vueisotope";
import imagesLoaded from "vue-images-loaded";
export default {
  name: "ShopIsotope",
  components: {
    isotope
  },
  directives: {
    imagesLoaded
  },
  data() {
    return {
      list: this.productData,
      filterOption: "all product",
      nodataFlag: false,
      filterToggleStatus: false,
      searchToggleStatus: false,
      option: {
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
        percentPosition: true,
        animationEngine: "best-available",
        masonry: {
          columnWidth: ".isotope-item"
        },
        getFilterData: {
          "all product": function() {
            return true;
          },
          women: function(el) {
            return el.category === "women";
          },
          men: function(el) {
            return el.category === "men";
          },
          bag: function(el) {
            return el.category === "bag";
          },
          shoes: function(el) {
            return el.category === "shoes";
          },

          watches: function(el) {
            return el.category === "watches";
          }
        }
      }
    };
  },
  props: ["productData"],
  methods: {
    getImgPath(imgName) {
      return imgName ? require("@/assets/images/" + imgName) : "";
    },
    layout() {
      this.$refs.shopIsotope.layout("fitRows");
    },
    filter(key) {
      this.$refs.shopIsotope.filter(key);
      if (key !== "all product") {
        document.querySelectorAll("." + key).length > 0
          ? (this.nodataFlag = false)
          : (this.nodataFlag = true);
      } else {
        this.nodataFlag = false;
      }
    },
    filterStatus() {
      this.filterToggleStatus = !this.filterToggleStatus;
      this.searchToggleStatus = false;
    },
    searchStatus() {
      this.searchToggleStatus = !this.searchToggleStatus;
      this.filterToggleStatus = false;
    }
  }
};
</script>
