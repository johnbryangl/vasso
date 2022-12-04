<script setup>
import { ref } from "vue";
import contact from "@/assets/contact.json";

const offcanvas = ref(null);

function toggleNavBar() {
  offcanvas.value.toggle()
}

onMounted(() => {
  offcanvas.value = new bootstrap.Offcanvas(document.getElementById('navbar-offcanvas'));
  window.addEventListener('resize', function(event) {
    const width = window.innerWidth;
    if (width >= 576) {
      offcanvas.value.hide();
    }
  }, true);
});
</script>

<template>
  <div id="app">
    <NavBar @show-nav-bar="toggleNavBar" />
    <NuxtPage />
    <div class="border-top py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-3 col-lg-4 mb-4">
            <img class="pe-none" src="https://ik.imagekit.io/vassolifestyleassets/website_assets/vasso-logo-black.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670091076659" style="width: 150px" />
          </div>
          <div class="col col-12 col-md-3 col-lg-4 mb-4">
            <p class="fw-bold">Website Links</p>
            <p>
              <nuxt-link to="/" class="nav-link link-hover list-detail">
                Home
              </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/product-catalogue" class="nav-link link-hover list-detail">
                Product Catalogue
              </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/contact-us" class="nav-link link-hover list-detail">
                Contact Us
              </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/faqs" class="nav-link link-hover list-detail">
                FAQs
              </nuxt-link>
            </p>
          </div>
          <div class="col col-12 col-md-6 col-lg-4 mb-4">
            <p class="fw-bold">Contact Us</p>
            <p>
              <a :href="`tel:${contact.mobileNumber}`" class="nav-link link-hover list-detail">
                <i class="bi bi-telephone-fill me-2"></i>
                {{ contact.mobileNumber }}
              </a>
            </p>
            <p>
              <a :href="`mailto:${contact.emailAddress}`" class="nav-link link-hover list-detail">
                <i class="bi bi-envelope-fill me-2"></i>
                {{ contact.emailAddress }}
              </a>
            </p>
            <p>
              <a :href="contact.facebookUrl" class="nav-link link-hover list-detail">
                <i class="bi bi-facebook me-2"></i>
                {{ contact.facebookName }}
              </a>
            </p>
            <p>
              <a :href="contact.instagramUrl" class="nav-link link-hover list-detail">
                <i class="bi bi-instagram me-2"></i>
                {{ contact.instagramName }}
              </a>
            </p>
          </div>
        </div>

        
        <p class="mt-3 text-secondary list-detail">
          Copyright © 2021 Vasso Lifestyle. All rights reserved.
        </p>
      </div>
    </div>
    <OffcanvasNarBar @hide-nav-bar="toggleNavBar" />
    
  </div>
</template>

<style>
#app:not(i) {
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  overflow-x: hidden !important;
}


.minimalist-button-white {
  outline: none;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px;
  width: 150px;
  transition: 0.25s;
  font-weight: 600;
  letter-spacing: 1px;
}

.minimalist-button-white:hover {
  background-color: white;
  color: black;
}

.minimalist-button-black {
  outline: none;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 8px;
  width: 150px;
  transition: 0.25s;
  font-weight: 600;
  letter-spacing: 1px;
}

.minimalist-button-black:hover {
  background-color: black;
  color: white;
}

.catalogue-menu-button {
  outline: none;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 8px;
  transition: 0.25s;
  font-weight: 600;
  letter-spacing: 1px;
}

.catalogue-menu-button:hover {
  background-color: black;
  color: white;
}

.catalogue-menu-button-active {
  background-color: black;
  color: white;
}

.dark {
  background-color: rgb(19, 19, 19) !important;
}

.card-img-top {
  object-fit: cover;
}

.link-hover:hover {
  opacity: 70%;
  transition: 0.2s;
}

@media only screen and (max-width: 400px) {
  .list-detail {
    font-size: 0.75rem !important;
  }
}

@media only screen and (max-width: 768px) {
  .section-title {
    font-size: 2.2rem !important;
  }

  .section-description {
    font-size: 1rem !important;
  }

}

@media only screen and (max-width: 576px) {
 
  .section-title {
    font-size: 1.76rem !important;
  }

  .section-description {
    font-size: 0.85rem !important;
  }

}
</style>
