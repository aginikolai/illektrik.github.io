export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error("must be method get root")
  }

  afterRender() {

  }
}