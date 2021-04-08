<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap">
    <div class="flex-grow-1">
      <input
        v-model="filters.search"
        type="text"
        class="form-control form-control-lg"
        placeholder="Filter by street name"
      />
    </div>

    <div class="p-2">
      <!-- <div class="form-check form-check-inline"> -->
        <label class="form-check-label radio-inline" for="inlineRadio1">
        <input
          v-model="filters.upcoming"
          class="form-check-input"
          type="radio"
          name="currentOrUpcomingRadioGroup"
          id="inlineRadio1"
          :value="false"
        />
          Current Closures
        </label>
      <!-- </div> -->
      <!-- <div class="form-check form-check-inline"> -->
        <label class="form-check-label radio-inline" for="inlineRadio2">
        <input
          v-model="filters.upcoming"
          class="form-check-input"
          type="radio"
          name="currentOrUpcomingRadioGroup"
          id="inlineRadio2"
          :value="true"
        />
          Upcoming Closures
        </label>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { filters } from '../lib/closures'

export default {
  setup() {
    return { filters }
  },
}
</script>
