<template lang="html">
  <div class="table-responsive">
    <table class="table table-striped table-sm table-bordered mb-0">
      <thead>
        <tr>
          <th class="font-weight-bold">Street</th>
          <th class="font-weight-bold">Type</th>
          <th class="font-weight-bold">Closed</th>
          <th class="font-weight-bold">Reopened</th>
        </tr>
      </thead>
      <tbody class="small">
        <tr v-for="closure in closures" :key="closure.OBJECTID">
          <td>
            <router-link :to="closure.path" class="text-decoration-none">
              {{ closure.STREET }}
            </router-link>
          </td>
          <td class="text-nowrap">{{ closure.CLOSURE_TYPE }}</td>
          <td class="">{{ closure.formatDate('Date_Closed') }}</td>
          <td class="">{{ closure.formatDate('Date_Opened') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'closure-table',
  props: ['closures']
}
</script>
