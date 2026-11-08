// 月饼礼盒产品数据
export const products = [
  {
    id: 1,
    name: '团圆经典礼盒',
    flavor: '蛋黄莲蓉 · 五仁 · 豆沙 · 枣泥 8枚装',
    originalPrice: 299,
    price: 199,
    tag: '热卖',
    emoji: '🥮'
  },
  {
    id: 2,
    name: '流心奶黄尊享礼盒',
    flavor: '流心奶黄 · 巧克力流心 6枚装',
    originalPrice: 358,
    price: 268,
    tag: '新品',
    emoji: '🌕'
  },
  {
    id: 3,
    name: '低糖养生礼盒',
    flavor: '低糖杂粮 · 抹茶红豆 6枚装',
    originalPrice: 268,
    price: 178,
    tag: '养生',
    emoji: '🌿'
  },
  {
    id: 4,
    name: '豪华双层团圆礼盒',
    flavor: '十二味集锦 · 双层实木礼盒 12枚装',
    originalPrice: 599,
    price: 428,
    tag: '至尊',
    emoji: '🏮'
  },
  {
    id: 5,
    name: '冰皮缤纷礼盒',
    flavor: '冰皮榴莲 · 芒果 · 蓝莓 8枚装',
    originalPrice: 329,
    price: 229,
    tag: '人气',
    emoji: '❄️'
  }
]

// 优惠券数据
export const coupons = [
  {
    id: 'c50',
    amount: 50,
    threshold: 199,
    scope: '全场通用'
  },
  {
    id: 'c30',
    amount: 30,
    threshold: 99,
    scope: '全场通用'
  },
  {
    id: 'c100',
    amount: 100,
    threshold: 399,
    scope: '仅限豪华双层礼盒'
  }
]

// 活动信息
export const activityInfo = {
  title: '中秋献礼 · 月饼团圆季',
  subtitle: '花好月圆人团圆 · 好礼相赠情更浓',
  period: '8月15日 - 9月15日'
}
