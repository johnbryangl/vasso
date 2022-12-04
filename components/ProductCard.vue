<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
</script>

<template>

<div class="col">
  <div class="card h-100">
    <NuxtLink :to="`/product-catalogue/${id}`" class="text-decoration-none text-reset link-hover">
      <img :src="`${imageUrl}&tr=q-70,w-0.65`" class="card-img-top pe-none">
    </NuxtLink>
    <div class="card-body p-4" style="">
      <NuxtLink :to="`/product-catalogue/${id}`" class="text-decoration-none text-reset link-hover">
        <span class="h5 fw-bold product-card-name">
          {{ name }}
        </span>
        <p class="text-secondary" style="font-size: 12px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
          {{ description }}
        </p>
      </NuxtLink>

      <hr />
      <div>
        <span class="fw-bold">
          ₱ {{ price.toFixed(2) }}
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .product-card-name {
    font-size: 0.85rem;
  }
}

@media only screen and (max-width: 400px) {
  .product-card-name {
    font-size: 0.65rem;
  }
}
</style>