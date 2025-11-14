<template>
  <div>
    <AddCom />
    <DeleteCom />
    <ModifyCom />
    <QueryCom />
  </div>
</template>

<script>
import AddCom from './components/AddCom.vue'
import DeleteCom from './components/DeleteCom.vue'
import ModifyCom from './components/ModifyCom.vue'
import QueryCom from './components/QueryCom.vue'

export default {
  components: {
    AddCom,
    DeleteCom,
    ModifyCom,
    QueryCom,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
