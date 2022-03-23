import { ref } from 'vue'
import { loadModules } from 'esri-loader'

// map app

// https://hillsborough.maps.arcgis.com/home/webmap/viewer.html?webmap=36ec601ba440417ead12dc49d612665d
const portalItem = { id: '36ec601ba440417ead12dc49d612665d' }

export async function webMap() {
  const [WebMap] = await loadModules(['esri/WebMap'])
  return new WebMap({ portalItem })
}

// feature layer

export const featureLayerJson = ref(null)

export async function featureLayer() {
  const [FeatureLayer] = await loadModules(['esri/layers/FeatureLayer'])
  const fl = new FeatureLayer(featureLayerJson.value)
  return fl
}

export async function initFeatureLayer() {
  const map = await webMap()
  await map.load()

  featureLayerJson.value = map.layers.items[0].toJSON()
}
