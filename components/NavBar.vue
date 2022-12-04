<template>
  <div>
    <nav class="navbar navbar-expand-sm dark navbar-dark">
      <div class="d-flex flex-column container-fluid">
        <div class="d-flex justify-content-center w-100 my-2 position-relative">
          <NuxtLink class="navbar-brand" to="/">
            <img class="pe-none" id='logo' src="https://ik.imagekit.io/vassolifestyleassets/website_assets/vasso-logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670091076634" />
          </NuxtLink>
          
          <button class="navbar-toggler position-absolute end-0" type="button" @click="() => $emit('show-nav-bar')">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link mx-3" :class="{ 'active fw-bold': $route.path == '/' }">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/product-catalogue" class="nav-link mx-3" :class="{ 'active fw-bold': $route.path.includes('product') }">
                Product Catalogue
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact-us" class="nav-link mx-3" :class="{ 'active fw-bold': $route.path.includes('contact') }">
                Contact Us
              </NuxtLink>
            </li>
            <NuxtLink to="/faqs" class="nav-link mx-3" :class="{ 'active fw-bold': $route.path.includes('faqs') }">
              FAQs
            </NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#logo {
  width: 140px;
}
</style>