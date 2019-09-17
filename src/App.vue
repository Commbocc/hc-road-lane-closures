<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
import router from './router'
import store from './store'

export default {
  router,
  store
}
</script>

<style src="./assets/main.css" />
