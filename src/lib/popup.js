import { ref, watch } from 'vue'
import { loadModules } from 'esri-loader'
import { activeClosure } from './closures'

let popup = {}

export const popupRef = ref(null)
export const modalRef = ref(null)

export async function openPopup(closure) {
  popup.visible = false

  const [Graphic, Popup] = await loadModules([
    'esri/Graphic',
    'esri/widgets/Popup',
  ])

  const graphic = Graphic.fromJSON(closure)

  popup = new Popup({
    container: popupRef.value,
    features: [graphic],
  })

  popup.visible = true
}

watch(activeClosure, openPopup)
