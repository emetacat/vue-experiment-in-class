<template>
  <div>
    <CardCom>
      <template v-slot:header>
        <img :src="imageSrc" alt="卡片背景图" class="card-image" />
      </template>
      <template v-slot:bodycontent>
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
      </template>
      <template v-slot:footer>
        <button class="card-action" @click="handleAction">
          {{ actionText }}
        </button>
      </template>
    </CardCom>
  </div>
</template>

<script>
import imageSrc from './assets/photo.jpg'
import CardCom from './components/CardCom.vue'

export default {
  components: {
    CardCom,
  },
  data() {
    return {
      imageSrc: imageSrc,
      title: '风景卡片',
      description:
        '陆家嘴金融贸易区，是中国上海主要的金融中心区之一，位于浦东新区黄浦江畔，与西岸的外滩金融创新试验区相对，被喻为“中国版的华尔街”。',
      actionText: '立即行动',
    }
  },
}
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 300px;
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
