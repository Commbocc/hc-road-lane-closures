import { reactive, ref, computed, watch } from 'vue'
import { featureLayer, featureLayerJson } from './esri'
import { debounce } from '../util'

// state
export const closures = reactive({
  loading: false,
  error: '',
  data: [],
})

// active closure
export const activeClosureId = ref(null)

export const activeClosure = computed(() =>
  closures.data.find((f) => f.attributes?.objectid == activeClosureId.value)
)

export function activateClosure(id) {
  activeClosureId.value = id
}

// pagination
export const pagination = reactive({
  page: 1,
  limit: 10,
})
export const count = ref(0)
export const offset = computed(() => pagination.limit * (pagination.page - 1))
export const pages = computed(() => Math.ceil(count.value / pagination.limit))

// filters
export const filters = reactive({
  upcoming: false,
  search: '',
})

// watchers
watch(
  [pagination, filters],
  debounce(() => {
    if (pagination.page > pages.value) return (pagination.page = 1)
    queryClosures()
  })
)

// query

// query's where clause
export const where = computed(() =>
  [
    featureLayerJson.value?.layerDefinition?.definitionExpression,
    'DATE_OPENED >= CURRENT_TIMESTAMP+1',
    filters.search ? `STREET like '%${filters.search}%'` : null,
    filters.upcoming
      ? 'DATE_CLOSED > CURRENT_TIMESTAMP'
      : '(DATE_CLOSED <= CURRENT_TIMESTAMP)',
  ]
    .filter(Boolean)
    .join(' AND ')
)

// query options
export const query = computed(() => ({
  where: where.value,
  f: 'json',
  outFields: '*',
  orderByFields: [
    `DATE_CLOSED ${filters.upcoming ? 'asc' : 'desc'}`,
    'DATE_OPENED asc',
    'STREET asc',
  ],
  returnGeometry: true,
  num: pagination.limit,
  start: offset.value,
}))

// query method
export async function queryClosures() {
  closures.error = ''
  closures.loading = true

  try {
    const fl = await featureLayer()

    console.log('query def', fl.definitionExpression)

    // set count
    count.value = await fl.queryFeatureCount({
      where: where.value,
    })

    // fetch features
    const { features } = await fl.queryFeatures(query.value)

    // set closures
    closures.data = features.map((f) => ({
      ...f.toJSON(),
      popupTemplate: fl.popupInfo,
    }))
  } catch (err) {
    closures.error = err.message
  } finally {
    closures.loading = false
  }
}
