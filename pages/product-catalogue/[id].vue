<script>
import products from "@/assets/product-catalogue.json";
import contact from "@/assets/contact.json";

export default {
  data() {
    return {
      products: products,
      contact: contact,
      buyNowClicked: false,
    };
  },
  computed: {
    product() {
      return this.products.find((product) => product.id === this.$route.params.id);
    }
  },
  methods: {
    viewImage() {
      const viewer = new Viewer(document.getElementById('otherImages'), {
        inline: false,
        url(image) {
          return `${image.id}&tr=q-65,w-0.75`;
        },
        toolbar: false,
        title: false,
      });
    },
    buyNowHandler() {
      this.viewImage()
      this.buyNowClicked = true;
    }
  }
}
</script>

<template>
<div class="container py-5">
  <NuxtLink to="/product-catalogue" class="fw-bold text-secondary link-hover text-decoration-none">
    <i class="bi bi-chevron-left me-2"></i>
      Back to Product Catalogue
  </NuxtLink>
  <div class="row mt-5">
    <div class="col col-12 col-md-6">
      <img :src="product.primaryImageUrl" class="img-fluid rounded-3 pe-none" />
      
      <div class="mt-4" id="otherImages" v-if="(product.otherImageUrls.length > 0)">
        <img @click="viewImage" :id="imageUrl" v-for="imageUrl in product.otherImageUrls" :key="imageUrl" :src="`${imageUrl}&tr=w-100,q-65`" :style="`width: 50px; height: 50px; cursor: pointer; object-fit: cover`" class="rounded-3 me-3 link-hover mb-3" />
      </div>

    </div>
    <div class="col col-12 col-md-6">
      <div class="pt-5 pt-md-0 ps-0 ps-md-5">
        <p class="h1">
        {{ product.name }}
      </p>
      <p class="text-secondary">
        {{ product.primaryDescription }}
      </p>

      
      <hr class="my-4" />

      <p class="h3 fw-bold">
        ₱ {{ product.price.toFixed(2) }}
      </p>

      
      <p class="mt-4 text-secondary" v-show="product.secondaryDescription !== ''">
        {{ product.secondaryDescription }}
      </p>

      <template v-if="(product.colorRecommendations.length > 0)">
        <p class="fw-bold mt-4">
          Chain color recommendations
        </p>
        <div>
          <div v-for="color in product.colorRecommendations" :key="color.code" class="d-inline-block mb-3">
            <template v-if="!color.code">
              <div :style=" `width: 50px; height: 50px; background-color: white; margin-top: -12px`" class="rounded-3 me-3 border shadow-sm"></div>
            </template>
            <template v-else>
              <div :style="`width: 50px; height: 50px; background-color: ${color.code}; margin-top: -12px`" class="rounded-3 me-3 shadow-sm"></div>
            </template>
          </div>
          
        </div>
      </template>

      <button class="minimalist-button-black w-100 mt-5 p-1" @click="buyNowHandler">
        Buy now
      </button>



      <div class="mt-4" v-show="buyNowClicked">
        <a :href="contact.facebookUrl" class="nav-link d-block link-hover mb-2">
          <i class="bi bi-facebook me-2"></i>
          Transact via Facebook
        </a>
        <a :href="contact.instagramUrl" class="nav-link d-block link-hover mb-2">
          <i class="bi bi-instagram me-2"></i>
          Transact via Instagram
        </a>
      </div>

      </div>
    </div>
  </div>
</div>
</template>