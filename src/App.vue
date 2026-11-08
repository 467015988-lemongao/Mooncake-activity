<script setup>
import HeroBanner from './components/HeroBanner.vue'
import ProductList from './components/ProductList.vue'
import CouponSection from './components/CouponSection.vue'
import RuleSection from './components/RuleSection.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="app">
    <main class="app-main">
      <HeroBanner />
      <ProductList />
      <CouponSection />
      <RuleSection />
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  min-height: 100dvh;
}

.app-main {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 24px;
}
</style>
