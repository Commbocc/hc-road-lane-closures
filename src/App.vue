<template>
  <div v-if="closures.error" class="py-5">
    <div class="alert alert-warning" role="alert">
      {{ closures.error }}
    </div>
  </div>

  <div v-else>
    <ClosuresMap />

    <Filters class="my-3" />

    <div v-if="closures.loading" class="p-5 text-center">
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <ClosuresTable v-else />

    <Pagination />

    <ModalPopup />
  </div>
</template>

<script>
import { initFeatureLayer } from './lib/esri'
import { queryClosures, closures } from './lib/closures'

import Filters from './components/Filters.vue'
import ClosuresTable from './components/ClosuresTable.vue'
import Pagination from './components/Pagination.vue'
import ClosuresMap from './components/ClosuresMap.vue'
import ModalPopup from './components/ModalPopup.vue'

export default {
  setup() {
    initFeatureLayer().then(queryClosures)

    return { closures }
  },

  components: { Filters, ClosuresTable, Pagination, ClosuresMap, ModalPopup },
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
