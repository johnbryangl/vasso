<script setup>
import { ref } from 'vue';

import products from "@/assets/product-catalogue.json";

let filteredProducts = ref([]);

const activeMenu = ref('featuredProducts');

function changeActiveMenu(menuItem) {
  activeMenu.value = menuItem;
  displayProducts(menuItem);
}

function displayProducts(menuItem) {
  if (activeMenu.value == 'featuredProducts') {
    filteredProducts.value = products.filter((product) => product.isFeatured );
  } else {
    filteredProducts.value = products;
  }
}

displayProducts();
</script>

<template>
<div class="py-5">
  <div class="container">
    <p class="h1 text-center section-title">Product Catalogue</p>

    <div class="mt-3 row mb-5 text-secondary">
      <div class="col col-12 col-md-6 mb-3 text-center">
        <span class="catalogue-menu-button w-100 d-block" :class="{ ' catalogue-menu-button-active': activeMenu == 'featuredProducts' }" style="cursor: pointer" @click="() => changeActiveMenu('featuredProducts')">Featured Products</span>
      </div>
        
      <div class="col col-12 col-md-6 mb-3 text-center">
        <span class="catalogue-menu-button w-100 d-block" :class="{ ' catalogue-menu-button-active': activeMenu == 'allProducts' }" style="cursor: pointer" @click="() => changeActiveMenu('allProducts')">All Products</span>
      </div>
        
    </div>

    <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-3 g-md-5">
      <ProductCard 
        v-for="product in filteredProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :description="product.primaryDescription"
        :imageUrl="product.primaryImageUrl"
        :price="product.price"
      />
    </div>
  </div>
</div>
</template>