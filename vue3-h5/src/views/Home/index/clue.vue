<template>
    <div>
        新增线索
    </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import axios from 'axios';
onMounted(()=>{
  axios.delete(`http://localhost:5000/port/1`).then((res)=>{console.log(res,"res");
  })
})
</script>

<style scoped></style>