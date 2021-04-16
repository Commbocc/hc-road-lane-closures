import { ref, watch, onMounted } from 'vue'
import { loadModules } from 'esri-loader'

import { webMap } from './esri'
import { activeClosure } from './closures'

export const mapRef = ref(null)

//
export function initMap() {
  onMounted(async () => {
    const [
      //
      MapView,
      Home,
      Legend,
      Graphic,
      Expand,
    ] = await loadModules([
      'esri/views/MapView',
      'esri/widgets/Home',
      'esri/widgets/Legend',
      'esri/Graphic',
      'esri/widgets/Expand',
    ])

    const map = await webMap()

    let view = new MapView({
      map,
      container: mapRef.value,
    })

    await view.when()

    // view ready

    resetView(view)

    const layer = map.layers.getItemAt(0)
    // const layerView = await view.whenLayerView(layer)

    // zoom to active closure
    watch(activeClosure, (newVal) => {
      if (!newVal) return
      const graphic = Graphic.fromJSON(newVal)
      view.goTo(graphic)
    })

    // map widgets

    // adds the home widget to the top left corner of the MapView
    const homeWidget = new Home({ view })
    view.ui.add(homeWidget, 'top-left')

    // add legend
    const legend = new Legend({
      view,
      layerInfos: [
        {
          layer,
          title: 'Legend',
        },
      ],
      container: document.createElement('div'),
    })

    const legendExpand = new Expand({
      expandIconClass: 'esri-icon-layer-list',
      expandTooltip: 'Expand Legend',
      view: view,
      content: legend.domNode,
    })

    view.ui.add(legend, 'bottom-left')
    view.ui.add(legendExpand, 'top-left')

    //
  })
}

function resetView(view) {
  view.popup.dockEnabled = true
  view.popup.dockOptions.buttonEnabled = false
  view.popup.collapsed = false
  view.popup.dockOptions.collapseEnabled = false
}
