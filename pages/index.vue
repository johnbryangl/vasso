<script setup>
import products from "@/assets/product-catalogue.json";
let featuredProducts = products.filter((product) => product.isDisplayedOnHome && product.isFeatured);
featuredProducts = featuredProducts.slice(0,4);
</script>

<template>
<div>
  <div id="section-1" class="d-flex justify-content-center align-items-center text-white">
    <div class="container">
      <p class="display-3 fw-bold  section-title">More than just a holder</p>
      <p class="text-light fs-3 section-description" style="margin-top: -10px">
        Vasso is a lifestyle label that excels in making premium & elegant leather cup holders
      </p>

      <NuxtLink to="product-catalogue" class="minimalist-button-white mt-3 text-decoration-none d-inline-block text-center">
        Shop now
      </NuxtLink>
    </div>
  </div>

  <div id="section-2" class="container py-5">
    <p class="h1 text-center section-title">Featured Products</p>
    <p class="text-center text-secondary fs-4 section-description">Find the latest releases and special deals for you.</p>

    <div>
      <div class="row row-cols-2 row-cols-lg-4 g-3 g-md-5 mt-2">
        <ProductCard 
          v-for="product in featuredProducts"
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

  <div id="section-3" class="d-flex justify-content-center align-items-center text-light">
    <div class="container">
      <p class="display-3 fw-bold section-title text-center">Got any questions?</p>
      <p class="fw-light fs-5 section-description  text-center">
        You may <NuxtLink to="/contact-us" class="fw-bold text-reset link-hover text-decoration-none">contact us here</NuxtLink> or visit our FAQ page.
      </p>

      <p class=" text-center">
        <NuxtLink to="/faqs" class="fw-bold fs-4 text-reset link-hover text-decoration-none">
        Learn more
        <i class="bi bi-chevron-right"></i>
      </NuxtLink>
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>
#section-1 {
  background: url('https://ik.imagekit.io/vassolifestyleassets/website_assets/index-page-section-1?ik-sdk-version=javascript-1.4.3&updatedAt=1670135681094&tr=q-70,w-0.65');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 700px;
}

#section-3 {
  background: url('https://ik.imagekit.io/vassolifestyleassets/website_assets/index-page-section-3?ik-sdk-version=javascript-1.4.3&updatedAt=1670135693746&tr=q-70,w-0.65');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
}


@media only screen and (max-width: 768px) {
  #section-1 {
    height: 450px;
  }
}

</style>