<template lang="html">
  <div>

    <div v-if="loading" class="">
      <p class="h4 text-center m-0">
        Loading...
      </p>
    </div>

    <div v-else-if="closure" is="ClosureCard"></div>

    <p v-else class="h4 text-center m-0">
      No Result
    </p>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ClosureCard from '../components/ClosureCard'

export default {
  props: ['id'],
  components: { ClosureCard },
  methods: mapActions(['fetchClosure']),
  computed: mapState({
    loading: state => state.loading,
    closure: state => state.closures.active
  }),
  mounted () {
    this.fetchClosure(this.id)
  }
}
</script>
