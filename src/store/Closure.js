import moment from 'moment'

export default class Closure {
  constructor (feature) {
    this.geometry = feature.geometry
    for (var k in feature.attributes) {
      this[k] = feature.attributes[k]
    }
  }

  get path () {
    return `/${this.OBJECTID}`
  }

  formatDate (field, format = 'LLL') {
    return moment(this[field]).local().format(format)
  }
}
