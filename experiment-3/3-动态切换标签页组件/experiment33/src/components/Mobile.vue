<template>
  <div class="content-flex">
    <GoodsCom tag="折叠">
      <template v-slot:header>
        <img class="product-img" src="../assets/samsung.png" alt="智能手机" />
        <h3 class="product-title">Galaxy Z Flip7</h3>
        <p class="product-desc">玲珑便携的超大外屏智能手机。</p>
      </template>
      <template v-slot:price>
        <span class="current-price">¥7999</span>
        <span class="original-price">¥8999</span>
      </template>
    </GoodsCom>

    <GoodsCom tag="新品">
      <template v-slot:header>
        <img
          class="product-img"
          src="../assets/iphone.jpg"
          alt="iPhone 17 Pro" />
        <h3 class="product-title">iPhone 17 Pro</h3>
        <p class="product-desc">创新设计，打造巅峰性能 和超长续航。</p>
      </template>
      <template v-slot:price>
        <span class="current-price">¥299</span>
        <span class="original-price">¥399</span>
      </template>
    </GoodsCom>
  </div>
</template>

<script>
import GoodsCom from './GoodsCom.vue'
export default {
  name: 'Mobile',
  components: { GoodsCom },
}
</script>

<style scoped></style>
