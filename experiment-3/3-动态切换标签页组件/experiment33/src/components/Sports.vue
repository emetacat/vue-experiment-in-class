<template>
  <div class="content-flex">
    <GoodsCom tag="舒适">
      <template v-slot:header>
        <img
          class="product-img"
          src="../assets/nike.jpg"
          alt="女子运动鞋骑士鞋" />
        <h3 class="product-title">Air Jordan 4 RM</h3>
        <p class="product-desc">
          多种鞋面元素巧妙融入坚固柔韧的鞋笼中，强韧耐穿，是日常通勤的理想之选。
        </p>
      </template>
      <template v-slot:price>
        <span class="current-price">¥999</span>
        <span class="original-price">¥1099</span>
      </template>
    </GoodsCom>

    <GoodsCom tag="双11">
      <template v-slot:header>
        <img class="product-img" src="../assets/watch.jpg" alt="运动手表" />
        <h3 class="product-title">HUAWEI WATCH GT 6 Pro</h3>
        <p class="product-desc">
          全新骑行体验，户外进阶运动，21 天超长续航，蓝宝石玻璃 & 钛合金⁠。
        </p>
      </template>
      <template v-slot:price>
        <span class="current-price">¥2480</span>
        <span class="original-price">¥2999</span>
      </template>
    </GoodsCom>
  </div>
</template>

<script>
import GoodsCom from './GoodsCom.vue'
export default {
  name: 'Sports',
  components: { GoodsCom },
}
</script>

<style scoped></style>
