<template>
  <div class="container shopping-cart">
    <!-- breadcrumb -->
    <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
      <router-link class="stext-109 cl8 hov-cl1 trans-04" to="/shop">
        Shop
        <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
      </router-link>
      <span class="stext-109 cl4">
        Checkout
      </span>
    </div>
    <!-- Shoping Cart -->
    <form class="bg0 p-t-75 p-b-45">
      <div class="row">
        <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
          <div class="m-l-25 m-r--38 m-lr-0-xl">
            <div class="wrap-table-shopping-cart">
              <table class="table-shopping-cart">
                <tr class="table_head">
                  <th class="column-1">Produit</th>
                  <th class="column-2"></th>
                  <th class="column-3">Prix</th>
                  <th class="column-4">Quantité</th>
                  <th class="column-3">Total</th>
                  <th class="column-3 text-center">Action</th>
                </tr>
                <tr class="table_row">
                  <td class="column-1">
                    <div class="how-itemcart1">
                      <img src="@/assets/images/img3.jpg" alt="IMG" />
                    </div>
                  </td>
                  <td class="column-2">Parfum PARENN</td>
                  <td class="column-3">
                    123 $
                  </td>
                  <td class="column-4">
                    <CustomInputNumber ref="item2" :currentNumItem="1" />
                  </td>
                  <td class="column-3">
                    123 $
                  </td>
                  <td class="column-3 removeItem">
                    <button class="cl2 hov-cl1 trans-04">
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr class="table_row">
                  <td class="column-1">
                    <div class="how-itemcart1">
                      <img src="@/assets/images/img4.jpg" alt="IMG" />
                    </div>
                  </td>
                  <td class="column-2">Sac a poubelle</td>
                  <td class="column-3">
                    123 $
                  </td>
                  <td class="column-4">
                    <CustomInputNumber ref="item2" :currentNumItem="1" />
                  </td>
                  <td class="column-3">
                    123 $
                  </td>
                  <td class="column-3 removeItem">
                    <button class="cl2 hov-cl1 trans-04">
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
          <div
            class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm"
          >
            <h4 class="mtext-109 cl2 p-b-30">
              Cumul
            </h4>
            <div class="flex-w flex-t bor12 p-b-15">
              <div class="size-208">
                <span class="stext-110 cl2">
                  Produit total:
                </span>
              </div>
              <div class="size-209">
                <span class="mtext-110 cl2">
                  2
                </span>
              </div>
            </div>
            <div class="flex-w flex-t bor12 p-t-15 p-b-15">
              <div class="size-208">
                <span class="stext-110 cl2">
                  Montant total:
                </span>
              </div>
              <div class="size-209">
                <span class="mtext-110 cl2">
                  123 $
                </span>
              </div>
            </div>
            <button
              class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
            >
              Procéder au Checkout
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CustomInputNumber from "@/components/shop/CustomInputNumber.vue";
export default {
  name: "ShoppingCart",
  components: {
    CustomInputNumber
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
@media (max-width: 1600px) {
  .container {
    max-width: 1200px;
  }
}
</style>
