import { loadModules } from 'esri-loader'

export default {
  actions: {
    loadMap ({ rootState }, container) {
      loadModules([
        'esri/WebMap',
        'esri/views/MapView',
        'esri/Graphic'
      ]).then(([WebMap, MapView, Graphic]) => {

        let map = new WebMap({portalItem: {id: 'b51fb4e76e154e1b93b630eac3ea94ae'}})

        let view = new MapView({ map, container })

        let mainGraphic = new Graphic({
          geometry: rootState.closures.active.geometry,
          symbol: {
            type: 'simple-line',
            color: [255, 0, 0],
            width: 4
          }
        })

        let detourGraphic = (rootState.closures.detour) ? new Graphic({
          geometry: rootState.closures.detour.geometry,
          symbol: {
            type: 'simple-line',
            color: [0, 0, 255],
            width: 4
          }
        }) : null

        view.graphics.add(mainGraphic)
        if (detourGraphic) view.graphics.add(detourGraphic)

        view.when(mv => {
          mv.goTo(view.graphics)
        })
      })
    }
  }
}
