<template>
  <div class="offcanvas offcanvas-start dark w-100" tabindex="-1" id="navbar-offcanvas" aria-labelledby="navbar-offcanvas">
    <div class="offcanvas-header position-relative">
      <div>
        <NuxtLink class="navbar-brand" to="/">
          <img class="pe-none mx-auto d-block" style="width: 140px" src="https://ik.imagekit.io/vassolifestyleassets/website_assets/vasso-logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670091076634" />
        </NuxtLink>
        <p class="text-secondary text-center fw-light mt-3">A lifestyle label making premium & elegant leather cup holders</p>
      </div>
      <button type="button" class="btn-close btn-close-white position-absolute end-0 top-0 me-2 mt-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <hr class="mb-5" />
      <div class="text-light">
          <p class="mb-4">
            <nuxt-link @click="() => $emit('hide-nav-bar')" to="/" class="nav-link  link-hover"  :class="{ 'active fw-bold': $route.path == '/' }">
              Home
            </nuxt-link>
          </p>
          <p class="mb-4">
            <nuxt-link @click="() => $emit('hide-nav-bar')" to="/product-catalogue" class="nav-link link-hover" :class="{ 'active fw-bold': $route.path.includes('product') }">
              Product Catalogue
            </nuxt-link>
          </p>
          <p class="mb-4">
            <nuxt-link @click="() => $emit('hide-nav-bar')" to="/contact-us" class="nav-link link-hover" :class="{ 'active fw-bold': $route.path.includes('contact') }">
              Contact Us
            </nuxt-link>
          </p>
          <p class="mb-4">
            <nuxt-link @click="() => $emit('hide-nav-bar')" to="/faqs" class="nav-link link-hover" :class="{ 'active fw-bold': $route.path.includes('faqs') }">
              FAQs
            </nuxt-link>
          </p>
        </div>
    </div>
  </div>
</template>