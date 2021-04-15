<template>
  <div v-if="closures.data.length" class="table-responsive">
    <table class="table table-striped table-sm small">
      <thead>
        <tr>
          <th>Street</th>
          <th>Type</th>
          <th>Closed</th>
          <th>Opened</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="{ attributes } in closures.data"
          :key="attributes.objectid"
        >
          <tr :id="`closure-${attributes.objectid}`">
            <td>
              <strong>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#popupModal"
                  @click="activateClosure(attributes.objectid)"
                >
                  {{ attributes['STREET'] }}
                </a>
              </strong>

              <br />
              <small>
                from
                <strong>{{ attributes['FROM_STREET'] }}</strong>

                to
                <strong>{{ attributes['TO_STREET'] }}</strong>
              </small>
            </td>
            <td>
              {{ attributes['CLOSURE_TYPE'].split('_').join(' ') }}
            </td>
            <td>
              {{ formatDate(attributes['DATE_CLOSED']) }}
            </td>
            <td>
              {{ formatDate(attributes['DATE_OPENED']) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

  <div v-else class="text-center py-5">
    <p class="h4">No Closures</p>
    <p>Try refining your search.</p>
  </div>
</template>

<script>
import { closures, activateClosure } from '../lib/closures'
import { formatDate } from '../util'

export default {
  setup() {
    return { closures, activateClosure, formatDate }
  },
}
</script>
