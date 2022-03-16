import { $ } from "../dom"
import { ActiveRoute } from "./ActiveRoute"

export class Router{
  constructor(selector, routes) {
    if(!selector) {
      throw new Error("selector is not found")
    } 

    this.$placeholder = $(selector)
    this.routes = routes

    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }

  changePageHandler() {
    this.$placeholder.clear()
    const Page = ActiveRoute.path.includes('stats') ? this.routes.dashboard : this.routes.newGame

    const page = new Page(ActiveRoute.param)
    this.$placeholder.append(page.getRoot())

    page.afterRender()
  }
}