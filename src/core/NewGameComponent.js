import {DomListener} from './DomListener'

export class NewGameComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);

    this.prepare()

    this.store = options.store
    this.storeSub = null
  }

  prepare() {

  }

  toHTML() {
    return ''
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn)
  }

  $getState() {
    return this.store.getState().shootsMade
  }

  shootOnCell() {

  }

  init() {
    this.initDOMListeners()
  }

  destroy () {
    this.removeDOMListeners()
    this.storeSub.unsubscribe()
  }
}
