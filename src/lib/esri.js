import { ref } from 'vue'
import { loadModules } from 'esri-loader'

// https://hillsborough.maps.arcgis.com/home/webmap/viewer.html?webmap=36ec601ba440417ead12dc49d612665d
const portalItem = { id: '36ec601ba440417ead12dc49d612665d' }

const featureLayerJson = ref(null)

export async function initFeatureLayer() {
  const [WebMap] = await loadModules(['esri/WebMap'])

  const map = new WebMap({ portalItem })
  await map.load()

  featureLayerJson.value = map.layers.items[0].toJSON()
}

export async function featureLayer() {
  const [FeatureLayer] = await loadModules(['esri/layers/FeatureLayer'])
  return new FeatureLayer(featureLayerJson.value)
}
