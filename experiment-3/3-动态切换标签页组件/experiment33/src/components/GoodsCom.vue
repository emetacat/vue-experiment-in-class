<template>
  <div class="product-card">
    <div v-if="tag" class="tag">{{ tag }}</div>

    <slot name="header"></slot>

    <div class="price-area">
      <slot name="price"></slot>
    </div>

    <div class="btn-area">
      <button class="like-btn" @click="toggleLike">
        <span class="heart-icon" :class="{ liked: isLiked }">♥</span>
      </button>
      <button class="add-cart-btn" @click="addToCart">加入购物车</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsCom',
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isLiked: false,
    }
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked
    },
    addToCart() {
      alert('已加入购物车')
    },
  },
}
</script>

<style scoped>
.product-card {
  width: 300px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  margin: 20px;
  position: relative;
  background: white;
  transition: box-shadow 0.3s;
}
.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff4400;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 10;
}
.price-area {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;
}
.btn-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}
.like-btn {
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
}
.heart-icon {
  color: #ccc;
  transition: color 0.2s;
}
.heart-icon.liked {
  color: red;
}
.add-cart-btn {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
}
.add-cart-btn:hover {
  background: #0056b3;
}
</style>
