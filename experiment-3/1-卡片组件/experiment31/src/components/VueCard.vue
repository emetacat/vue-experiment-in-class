<style scoped>
.colorful-card {
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
}
.card-image {
  width: 100%;
  height: 300px;
}
.card-content {
  background: linear-gradient(to bottom, #4682b4, #2f5496);
  padding: 15px;
  color: white;
}
.card-title {
  font-size: 24px;
  margin-bottom: 12px;
}
.card-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}
.card-action {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
</style>

<template>
  <div class="colorful-card">
    <div class="card-content">
      <img :src="imageSrc" alt="卡片背景图" class="card-image" />
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
      <button class="card-action" @click="handleAction">{{ acivity }}</button>
    </div>
  </div>
</template>

<script>
import imageSrc from '../assets/photo1.jpg'
export default {
  data() {
    return {
      imageSrc: imageSrc,
      title: '风景卡片',
      description:
        '陆家嘴金融贸易区，是中国上海主要的金融中心区之一，位于浦东新区黄浦江畔，与西岸的外滩金融创新试验区相对，被喻为“中国版的华尔街”。',
      acivity: '立即行动',
    }
  },
  methods: {
    handleAction() {},
  },
}
</script>
