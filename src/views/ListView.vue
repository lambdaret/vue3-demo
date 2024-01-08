<script setup>
import { ref, onMounted } from 'vue'
import ListService from '@/services/ListService'

const data = ref(null)

onMounted(() => {
  ListService.getList()
    .then((response) => {
      data.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <div v-for="item in data" :key="item.id">
    <div>
      <span>{{ item.title }}</span>
      <span>{{ item.contents }}</span>
    </div>
  </div>
</template>
