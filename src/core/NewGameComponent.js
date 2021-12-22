import {DomListener} from './DomListener'

export class NewGameComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy () {
    this.removeDOMListeners()
  }
}
