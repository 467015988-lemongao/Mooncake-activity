<script setup>
import { activityInfo } from '../data/products.js'
</script>

<template>
  <section class="hero">
    <!-- 星星 -->
    <div class="stars">
      <span v-for="n in 12" :key="n" :class="['star', `star-${n}`]"></span>
    </div>

    <!-- 圆月 -->
    <div class="moon">
      <div class="moon-inner"></div>
      <div class="moon-glow"></div>
    </div>

    <!-- 云纹 -->
    <svg class="cloud cloud-left" viewBox="0 0 120 40" fill="none">
      <path d="M10 30 Q10 15 25 15 Q28 5 40 8 Q50 0 58 10 Q70 5 72 18 Q85 18 82 30 Z"
        fill="rgba(255,255,255,0.12)" />
    </svg>
    <svg class="cloud cloud-right" viewBox="0 0 120 40" fill="none">
      <path d="M10 30 Q10 15 25 15 Q28 5 40 8 Q50 0 58 10 Q70 5 72 18 Q85 18 82 30 Z"
        fill="rgba(255,255,255,0.1)" />
    </svg>

    <!-- 灯笼 -->
    <div class="lantern lantern-left">
      <div class="lantern-string"></div>
      <div class="lantern-body">🏮</div>
    </div>
    <div class="lantern lantern-right">
      <div class="lantern-string"></div>
      <div class="lantern-body">🏮</div>
    </div>

    <!-- 文案 -->
    <div class="hero-content">
      <p class="hero-subtitle">{{ activityInfo.subtitle }}</p>
      <h1 class="hero-title">{{ activityInfo.title }}</h1>
      <div class="hero-period">
        <span class="period-dot"></span>
        {{ activityInfo.period }}
        <span class="period-dot"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 20px 56px;
  overflow: hidden;
  background:
    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(245, 196, 81, 0.14), transparent 65%),
    transparent;
}

/* 月亮 */
.moon {
  position: absolute;
  top: 54px;
  right: 34px;
  width: 110px;
  height: 110px;
  animation: floatY 6s ease-in-out infinite;
}

.moon-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff3d0, var(--gold) 55%, var(--gold-deep));
  box-shadow:
    0 0 34px rgba(245, 196, 81, 0.55),
    0 0 80px rgba(245, 196, 81, 0.25);
}

.moon-inner::before,
.moon-inner::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(217, 166, 48, 0.35);
}

.moon-inner::before {
  width: 22px;
  height: 22px;
  top: 28px;
  left: 26px;
}

.moon-inner::after {
  width: 14px;
  height: 14px;
  top: 60px;
  left: 58px;
}

/* 星星 */
.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.7;
  animation: twinkle 3s ease-in-out infinite;
}

.star-1 { top: 8%; left: 12%; }
.star-2 { top: 16%; left: 55%; animation-delay: 0.6s; }
.star-3 { top: 6%; left: 78%; animation-delay: 1.2s; }
.star-4 { top: 28%; left: 8%; animation-delay: 0.3s; }
.star-5 { top: 38%; left: 82%; animation-delay: 1.8s; }
.star-6 { top: 12%; left: 32%; animation-delay: 2.2s; }
.star-7 { top: 22%; left: 90%; animation-delay: 0.9s; }
.star-8 { top: 44%; left: 18%; animation-delay: 1.5s; }
.star-9 { top: 50%; left: 90%; animation-delay: 0.2s; }
.star-10 { top: 30%; left: 68%; animation-delay: 2.6s; }
.star-11 { top: 5%; left: 45%; animation-delay: 1.1s; }
.star-12 { top: 46%; left: 40%; animation-delay: 1.9s; }

/* 云纹 */
.cloud {
  position: absolute;
  width: 130px;
  opacity: 0.9;
}

.cloud-left {
  top: 120px;
  left: -30px;
  animation: driftX 10s ease-in-out infinite;
}

.cloud-right {
  top: 190px;
  right: -36px;
  width: 160px;
  animation: driftX 12s ease-in-out infinite reverse;
}

/* 灯笼 */
.lantern {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lantern-string {
  width: 1px;
  height: 26px;
  background: rgba(245, 196, 81, 0.5);
}

.lantern-body {
  font-size: 40px;
  filter: drop-shadow(0 4px 14px rgba(255, 138, 61, 0.5));
  animation: swingLantern 5s ease-in-out infinite;
  transform-origin: top center;
}

.lantern-left {
  top: -6px;
  left: 26px;
}

.lantern-right {
  top: 26px;
  right: 22px;
  animation-delay: 0.5s;
}

/* 文案 */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  letter-spacing: 4px;
  margin-bottom: 14px;
}

.hero-title {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 3px;
  background: linear-gradient(180deg, var(--gold-light), var(--gold) 60%, var(--gold-deep));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 6px 30px rgba(245, 196, 81, 0.3);
  margin-bottom: 20px;
}

.hero-period {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  border: 1px solid var(--card-border);
  border-radius: 999px;
  background: var(--card-bg);
  font-size: 13px;
  color: var(--gold-light);
  letter-spacing: 1px;
}

.period-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--orange);
}

/* 动画 */
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes driftX {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(16px); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.25; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.4); }
}

@keyframes swingLantern {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
</style>
