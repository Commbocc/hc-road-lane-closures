<template>
  <div v-if="appState.error" class="py-5">
    <div class="alert alert-warning" role="alert">
      {{ appState.error }}
    </div>
  </div>

  <div v-else>
    <ClosuresMap />

    <Filters class="my-3" />

    <div v-if="appState.loading" class="p-5 text-center">
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <ClosuresTable v-else />

    <Pagination />
  </div>
</template>

<script>
import { initFeatureLayer } from './lib/esri'
import { queryClosures, appState } from './lib/closures'

import Filters from './components/Filters.vue'
import ClosuresTable from './components/ClosuresTable.vue'
import Pagination from './components/Pagination.vue'
import ClosuresMap from './components/ClosuresMap.vue'

export default {
  setup() {
    initFeatureLayer().then(queryClosures)

    return { appState }
  },

  components: { Filters, ClosuresTable, Pagination, ClosuresMap },
}
</script>
