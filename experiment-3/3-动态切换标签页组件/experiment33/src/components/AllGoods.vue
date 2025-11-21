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
  name: 'AllGoods',
  components: { GoodsCom },
}
</script>

<style scoped>
.content-flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.product-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-title {
  font-size: 18px;
  margin: 10px 0;
}
.product-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  height: 40px;
  overflow: hidden;
}
.current-price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
</style>
