<template>
  <div class="ratio ratio-16x9">
    <div id="map" ref="mapRef"></div>
  </div>
</template>

<script>
import { mapRef, initMap } from '../lib/map'

export default {
  setup() {
    initMap()

    return { mapRef }
  },
}
</script>

<style>
@import url('https://js.arcgis.com/4.18/esri/themes/light/main.css');
</style>
