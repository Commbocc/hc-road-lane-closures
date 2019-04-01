<template lang="html">
  <div>

    <form is="Filters" class="mb-3"></form>

    <div v-if="loading" class="">
      <p class="h4 text-center m-0">
        Loading...
      </p>
    </div>

    <table v-else-if="closures.length" is="ClosureTable" :closures="closures"></table>

    <p v-else class="h4 text-center m-0">
      No Results
    </p>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Filters from '../components/Filters'
import ClosureTable from '../components/ClosureTable'

export default {
  components: { Filters, ClosureTable },
  computed: mapState({
    loading: state => state.loading,
    closures: state => state.closures.index
  }),
  methods: mapActions(['search']),
  mounted () {
    this.search()
  }
}
</script>
