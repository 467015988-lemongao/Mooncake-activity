<script setup>
function scrollToProducts() {
  document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="footer-space"></div>
  <footer class="footer-bar">
    <div class="footer-inner">
      <div class="footer-hint">
        <p class="hint-main">限时特惠 · 低至 5.9 折</p>
        <p class="hint-sub">领券下单更划算</p>
      </div>
      <button class="footer-btn" @click="scrollToProducts">立即抢购</button>
    </div>
  </footer>
</template>

<style scoped>
/* 占位，避免内容被固定栏遮挡 */
.footer-space {
  height: calc(76px + env(safe-area-inset-bottom) + 16px);
}

.footer-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
  background: rgba(18, 22, 43, 0.92);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--card-border);
}

.footer-inner {
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.footer-hint {
  min-width: 0;
}

.hint-main {
  font-size: 14px;
  font-weight: 700;
  color: var(--gold);
}

.hint-sub {
  font-size: 11px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.footer-btn {
  flex-shrink: 0;
  min-height: 44px;
  padding: 12px 34px;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #4a2405;
  background: linear-gradient(135deg, var(--gold-light), var(--gold) 55%, var(--orange));
  border-radius: 999px;
  box-shadow: 0 4px 18px rgba(255, 138, 61, 0.45);
  transition: transform 0.15s;
}

.footer-btn:active {
  transform: scale(0.95);
}
</style>
