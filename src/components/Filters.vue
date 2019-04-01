<template lang="html">
  <form @submit.prevent="search" class="">

    <div class="input-group mb-1">
      <label for="search" class="sr-only">Filter Closures</label>
      <input v-model="$store.state.filters.searchTerm" class="form-control" id="search" placeholder="Filter Closures...">
      <div class="input-group-append input-group-btn">
        <button type="submit" class="btn btn-secondary">Search</button>
      </div>
    </div>

    <div class="form-check form-check-inline">
      <input v-model="selections" class="form-check-input" type="checkbox" value="Road Closure" id="road-closures">
      <label class="form-check-label" for="road-closures">
        Road Closures
      </label>
    </div>

    <div class="form-check form-check-inline mr-sm-2">
      <input v-model="selections" class="form-check-input" type="checkbox" value="Lane Closure" id="lane-closures">
      <label class="form-check-label" for="lane-closures">
        Lane Closures
      </label>
    </div>

  </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapActions(['search']),
    ...mapMutations([
      'setFilterSelections',
      'resetFilterSelections'
    ])
  },
  computed: {
    selections: {
      get () {
        return this.$store.state.filters.selections
      },
      set (value) {
        this.setFilterSelections(value)
      }
    }
  },
  watch: {
    selections () {
      if (!this.selections.length) {
        this.$nextTick(() => {
          this.resetFilterSelections()
        })
      }
    }
  }
}
</script>
