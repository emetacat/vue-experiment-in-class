<template>
  <div class="content-flex">
    <GoodsCom tag="爆款">
      <template v-slot:header>
        <img class="product-img" src="../assets/mac.jpg" alt="MacBook Air" />
        <h3 class="product-title">MacBook Air</h3>
        <p class="product-desc">超薄超快超便携，玩转工作创作和娱乐。</p>
      </template>
      <template v-slot:price>
        <span class="current-price">¥7999</span>
        <span class="original-price">¥9999</span>
      </template>
    </GoodsCom>

    <GoodsCom tag="性能">
      <template v-slot:header>
        <img class="product-img" src="../assets/lenovo.jpg" alt="Y7000P" />
        <h3 class="product-title">联想拯救者 Y7000P</h3>
        <p class="product-desc">
          英特尔® 酷睿™ Ultra 7 2025 16英寸AI高静游戏本
        </p>
      </template>
      <template v-slot:price>
        <span class="current-price">¥8999</span>
        <span class="original-price">¥9999</span>
      </template>
    </GoodsCom>
  </div>
</template>

<script>
import GoodsCom from './GoodsCom.vue'
export default {
  name: 'Digital',
  components: { GoodsCom },
}
</script>

<style scoped></style>
