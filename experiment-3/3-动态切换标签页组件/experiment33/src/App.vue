<template>
  <div class="container">
    <div class="nav-bar">
      <div
        v-for="item in navItems"
        :key="item.id"
        :class="['nav-item', { active: currentComponent === item.component }]"
        @click="currentComponent = item.component">
        {{ item.name }}
      </div>
    </div>

    <KeepAlive>
      <component :is="currentComponent" class="content" />
    </KeepAlive>
  </div>
</template>

<script>
import AllGoods from './components/AllGoods.vue'
import Digital from './components/Digital.vue'
import Mobile from './components/Mobile.vue'
import Sports from './components/Sports.vue'

export default {
  name: 'DynamicNavComponent',
  components: {
    AllGoods,
    Digital,
    Mobile,
    Sports,
  },
  data() {
    return {
      currentComponent: 'Digital',
      navItems: [
        { id: 1, name: '全部商品', component: 'AllGoods' },
        { id: 2, name: '电脑数码', component: 'Digital' },
        { id: 3, name: '手机通讯', component: 'Mobile' },
        { id: 4, name: '运动户外', component: 'Sports' },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.nav-bar {
  display: flex;
  background-color: #00c853;
}

.nav-item {
  padding: 15px 30px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #00a843;
}

.nav-item.active {
  font-weight: bold;
  background-color: #009620;
}

.content {
  padding: 20px;
  border: 1px solid #eee;
  margin-top: 10px;
  min-height: 400px;
}
</style>
