<script setup>
import contact from "@/assets/contact.json";
</script>

<template>
<div class="container py-5">
  <p class="h1 text-center section-title">Contact Us</p>
  <p class="fw-light text-secondary section-description text-center mb-5">
    We'd like to keep in touch wherever platform you are. Feel free to contact us with these channels in just a click.
  </p>
  <div class="d-flex justify-content-center">
    <div>
      <div class="d-flex align-items-center">
        <a :href="`tel:${contact.mobileNumber}`" class="fs-4 fw-light d-block nav-link link-hover">
          <i class="bi bi-telephone-fill me-4 d-block fs-1"></i>
        </a>
        <div>
          <span class="h6 fw-bold text-secondary">Mobile phone</span>
          <a :href="`tel:${contact.mobileNumber}`" class="fs-4 fw-light d-block nav-link link-hover list-detail">{{ contact.mobileNumber }}</a>
        </div>
      </div>

      <div class="d-flex align-items-center mt-5">
        <a :href="`mailto:${contact.emailAddress}`" class="fs-4 fw-light d-block nav-link link-hover">
          <i class="bi bi-envelope-fill me-4 d-block fs-1"></i>
        </a>
        <div>
          <span class="h6 fw-bold text-secondary">Email address</span>
          <a :href="`mailto:${contact.emailAddress}`" class="fs-4 fw-light d-block nav-link link-hover list-detail">{{ contact.emailAddress }}</a>
        </div>
      </div>

      <div class="d-flex align-items-center mt-5">
        <a :href="contact.facebookUrl" class="fs-4 fw-light d-block nav-link link-hover">
          <i class="bi bi-facebook me-4 d-block fs-1"></i>
        </a>
        <div>
          <span class="h6 fw-bold text-secondary">Facebook</span>
          <a :href="contact.facebookUrl" class="fs-4 fw-light d-block nav-link link-hover list-detail">{{ contact.facebookName }}</a>
        </div>
      </div>

      <div class="d-flex align-items-center mt-5">
        <a :href="contact.instagramUrl" class="fs-4 fw-light d-block nav-link link-hover">
          <i class="bi bi-instagram me-4 d-block fs-1"></i>
        </a>
        <div>
          <span class="h6 fw-bold text-secondary">Instagram</span>
          <a :href="contact.instagramUrl" class="fs-4 fw-light d-block nav-link link-hover list-detail">{{ contact.instagramName }}</a>
        </div>
      </div>
    </div>
    
  </div>
</div>
</template>

<style scoped>
@media only screen and (max-width: 400px) {
  .list-detail {
    font-size: 0.85rem !important;
  }
}
</style>