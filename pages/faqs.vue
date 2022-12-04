<script setup>
import faqs from '@/assets/faqs.json';
</script>

<template>
<div class="container py-5">
  <p class="h1 text-center section-title">Frequently Asked Questions</p>
  <p class="fw-light text-secondary section-description text-center mb-5">
    Do you have other questions in mind? You may reach out through 
    <NuxtLink to="/contact-us" class="fw-bold text-reset link-hover">
      contact channels here
    </NuxtLink>
    .
  </p>
  <div>
    <div class="accordion" id="accordionExample">


      <div class="accordion" id="accordion-faqs">
        <div class="accordion-item" v-for="faq in faqs" :key="faq.id">
          <h2 class="accordion-header" :id="`heading-${faq.id}`">
            <button class="accordion-button fw-bold" :class="{ 'collapsed': faq.id > 1 }" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${faq.id}`" :aria-expanded="faq.id == 1 ? true : false" :aria-controls="`collapse-${faq.id}`">
              {{ faq.question }}
            </button>
          </h2>
          <div :id="`collapse-${faq.id}`" class="accordion-collapse collapse" :class="{ 'show': faq.id == 1 }" :aria-labelledby="`heading-${faq.id}`" data-bs-parent="#accordion-faqs">
            <div class="accordion-body">
              {{ faq.answer }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: rgb(38, 38, 38) !important;
  color: white !important;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
}

.accordion-button {
  box-shadow: none !important;
}
</style>