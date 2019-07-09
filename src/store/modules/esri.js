import { loadModules, loadCss } from 'esri-loader'

loadCss('https://js.arcgis.com/4.10/esri/css/main.css')

export default {
  actions: {
    fetchFromLayer ({ commit, getters }, params) {
      commit('setLoading')
      return getters.featureLayer.then(featureLayer => {
        return featureLayer.queryFeatures(params)
      })
    }
  },
  getters: {
    featureLayer: () => {
      return loadModules([
        'esri/layers/FeatureLayer'
      ]).then(([FeatureLayer]) => {
        return new FeatureLayer({
          url: 'https://services.arcgis.com/apTfC6SUmnNfnxuF/ArcGIS/rest/services/Active_TTC_Permits_PublicView/FeatureServer/0'
        })
      })
    },
    defaultParams: () => {
      return {
        outFields: '*',
        returnGeometry: true,
        outSpatialReference: {
          wkid: 102100
        }
      }
    }
  }
}
