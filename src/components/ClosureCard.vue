<template lang="html">
  <div v-if="closure" class="card">

    <div class="card-header d-flex justify-content-between align-items-center bg-light">
      <h5 class="card-title m-0">
        {{ closure.STREET }}
      </h5>

      <router-link to="/" class="btn btn-primary rounded-0 m-0">
        Back
      </router-link>
    </div>

    <div class="embed-responsive embed-responsive-16by9 bg-dark">
      <div class="embed-responsive-item" ref="map"></div>
    </div>

    <div v-if="detour" class="alert alert-info rounded-0">
      <strong>Detour Available</strong><br>
      {{ detour.REASON }}
    </div>

    <div class="card-body">

      <dl>
        <dt class="font-weight-bold">Street</dt>
        <dd>{{ closure.STREET }}</dd>

        <dt class="font-weight-bold">From</dt>
        <dd>{{ closure.FROM_STREET }}</dd>
        <dt class="font-weight-bold">To</dt>
        <dd>{{ closure.TO_STREET }}</dd>

        <dt class="font-weight-bold">Date Closed</dt>
        <dd>{{ closure.formatDate('Date_Closed', 'LLLL') }}</dd>
        <dt class="font-weight-bold">Date Reopened</dt>
        <dd>{{ closure.formatDate('Date_Opened', 'LLLL') }}</dd>

        <dt class="font-weight-bold">Reason</dt>
        <dd>{{ closure.REASON }}</dd>

        <dt class="font-weight-bold">Contractor</dt>
        <dd>{{ closure.CONTRACTOR }}</dd>
        <dt class="font-weight-bold">TTC #</dt>
        <dd>{{ closure.TTC_NBR }}</dd>
      </dl>

    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: mapActions(['loadMap']),
  computed: mapState({
    closure: state => state.closures.active,
    detour: state => state.closures.detour
  }),
  mounted () {
    this.loadMap(this.$refs.map)
  }
}
</script>
