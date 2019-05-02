<template lang="html">
  <div>

    <div v-if="loading" class="">
      <p class="h4 text-center m-0">
        Loading...
      </p>
    </div>

    <div v-else-if="closure" is="ClosureCard"></div>

    <div v-else class="text-center">
      <h4><em>{{ $route.path }}</em> Returned No Result</h4>
      <p>
        <router-link to="/">View All Closures</router-link>
      </p>

      <small v-if="status" class="text-muted">{{ status }}</small>
    </div>

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
  }),
  data: () => ({
    closure: null,
    status: null
  }),
  mounted () {
    this.fetchClosure(this.id).then(closure => {
      // TODO: vuex loading state should not show card before detour data is loaded
      // temp fix: setting the closure once the promise is finished ensures any detour data is loaded
      this.closure = closure
    }).catch(err => {
      this.status = err
      this.closure = null
    })
  }
}
</script>
