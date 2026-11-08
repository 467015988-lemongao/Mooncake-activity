<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const rules = [
  '活动时间：8月15日 00:00 - 9月15日 24:00，活动期间下单均享受优惠价。',
  '优惠券数量有限，先到先得，每人每张券限领 1 次，领取后可在结算时抵扣。',
  '满 199 减 50、满 99 减 30 券全场通用；满 399 减 100 券仅限豪华双层团圆礼盒使用。',
  '月饼为时令食品，请于签收后 30 天内食用完毕，冰皮系列需冷藏保存。',
  '如遇恶劣天气或不可抗力因素，配送时效可能延长，敬请谅解。',
  '本活动最终解释权归主办方所有，如有疑问请联系在线客服。'
]
</script>

<template>
  <section class="rule-section">
    <button class="rule-header" @click="expanded = !expanded" aria-expanded="expanded">
      <span class="rule-title">活动规则</span>
      <svg
        :class="['rule-arrow', { up: expanded }]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <transition name="expand">
      <div v-if="expanded" class="rule-body">
        <ol class="rule-list">
          <li v-for="(r, i) in rules" :key="i" class="rule-item">{{ r }}</li>
        </ol>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.rule-section {
  margin: 20px 16px 0;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.rule-header {
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: transparent;
  color: var(--text-primary);
}

.rule-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 1px;
}

.rule-arrow {
  width: 18px;
  height: 18px;
  color: var(--text-secondary);
  transition: transform 0.25s;
}

.rule-arrow.up {
  transform: rotate(180deg);
}

.rule-body {
  padding: 0 16px 16px;
}

.rule-list {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rule-item {
  font-size: 12px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* 折叠过渡 */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.25s ease;
  max-height: 400px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
