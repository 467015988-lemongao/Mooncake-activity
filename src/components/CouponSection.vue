<script setup>
import { ref, onMounted } from 'vue'
import { coupons } from '../data/products.js'

const STORAGE_KEY = 'mooncake-coupons'

const claimedIds = ref(new Set())

onMounted(() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      claimedIds.value = new Set(JSON.parse(raw))
    }
  } catch (e) {
    // 忽略解析异常
  }
})

function claim(coupon) {
  if (claimedIds.value.has(coupon.id)) return
  claimedIds.value.add(coupon.id)
  // Set 不是深层响应式，手动触发重新渲染
  claimedIds.value = new Set(claimedIds.value)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...claimedIds.value]))
  } catch (e) {
    // 忽略写入异常
  }
}
</script>

<template>
  <section id="coupon-section" class="coupon-section">
    <h2 class="section-title">领券专享 · 先领再抢</h2>

    <div class="coupon-list">
      <div
        v-for="c in coupons"
        :key="c.id"
        :class="['coupon-card', { claimed: claimedIds.has(c.id) }]"
      >
        <div class="coupon-left">
          <span class="coupon-amount"><i>¥</i>{{ c.amount }}</span>
          <span class="coupon-threshold">满{{ c.threshold }}可用</span>
        </div>
        <div class="coupon-right">
          <span class="coupon-scope">{{ c.scope }}</span>
          <button
            class="claim-btn"
            :disabled="claimedIds.has(c.id)"
            @click="claim(c)"
          >
            {{ claimedIds.has(c.id) ? '已领取' : '领取' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.coupon-section {
  padding: 20px 16px 4px;
}

.coupon-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.coupon-card {
  display: flex;
  align-items: stretch;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.coupon-left {
  flex-shrink: 0;
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 14px 8px;
  background: linear-gradient(135deg, rgba(245, 196, 81, 0.2), rgba(255, 138, 61, 0.14));
  border-right: 1px dashed rgba(245, 196, 81, 0.4);
}

.coupon-amount {
  font-size: 26px;
  font-weight: 800;
  color: var(--gold);
  line-height: 1.1;
}

.coupon-amount i {
  font-style: normal;
  font-size: 14px;
}

.coupon-threshold {
  font-size: 11px;
  color: var(--text-secondary);
}

.coupon-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 16px;
}

.coupon-scope {
  font-size: 13px;
  color: var(--text-primary);
}

.claim-btn {
  flex-shrink: 0;
  min-height: 40px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 700;
  color: #4a2405;
  background: linear-gradient(135deg, var(--gold-light), var(--gold) 55%, var(--orange));
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(255, 138, 61, 0.35);
  transition: transform 0.15s;
}

.claim-btn:active {
  transform: scale(0.95);
}

.coupon-card.claimed .claim-btn {
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  cursor: not-allowed;
}

.coupon-card.claimed .coupon-left {
  opacity: 0.45;
}
</style>
