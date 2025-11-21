<template>
  <div class="colorful-card">
    <div class="card-content">
      <slot name="header"></slot>
      <slot name="bodycontent"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.colorful-card {
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
}
.card-content {
  background: linear-gradient(to bottom, #4682b4, #2f5496);
  padding: 15px;
  color: white;
}
</style>
