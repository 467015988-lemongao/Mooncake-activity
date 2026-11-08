<script setup>
import { products } from '../data/products.js'

function onBuy() {
  // 滚动到优惠券区并提示
  document.getElementById('coupon-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="product-section" class="product-section">
    <h2 class="section-title">月饼礼盒 · 甄选好礼</h2>

    <div class="product-list">
      <div v-for="p in products" :key="p.id" class="product-card">
        <div class="product-emoji">{{ p.emoji }}</div>
        <div class="product-info">
          <div class="product-name-row">
            <h3 class="product-name">{{ p.name }}</h3>
            <span class="product-tag">{{ p.tag }}</span>
          </div>
          <p class="product-flavor">{{ p.flavor }}</p>
          <div class="product-bottom">
            <div class="price-group">
              <span class="price-now"><i>¥</i>{{ p.price }}</span>
              <span class="price-origin">¥{{ p.originalPrice }}</span>
            </div>
            <button class="buy-btn" @click="onBuy">立即抢购</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-section {
  padding: 8px 16px 4px;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-card {
  display: flex;
  gap: 14px;
  padding: 16px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  backdrop-filter: blur(6px);
}

.product-emoji {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  background: linear-gradient(160deg, rgba(245, 196, 81, 0.16), rgba(255, 138, 61, 0.1));
  border-radius: 12px;
}

.product-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.product-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-tag {
  flex-shrink: 0;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--orange);
  border: 1px solid rgba(255, 138, 61, 0.55);
  border-radius: 999px;
}

.product-flavor {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-bottom {
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.price-group {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price-now {
  font-size: 22px;
  font-weight: 800;
  color: var(--orange);
}

.price-now i {
  font-style: normal;
  font-size: 13px;
  margin-right: 1px;
}

.price-origin {
  font-size: 12px;
  color: var(--text-secondary);
  text-decoration: line-through;
}

.buy-btn {
  flex-shrink: 0;
  padding: 9px 18px;
  min-height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #4a2405;
  background: linear-gradient(135deg, var(--gold-light), var(--gold) 55%, var(--orange));
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(255, 138, 61, 0.35);
  transition: transform 0.15s, box-shadow 0.15s;
}

.buy-btn:active {
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(255, 138, 61, 0.3);
}
</style>
