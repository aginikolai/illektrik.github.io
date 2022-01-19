import {$} from '../../core/dom'

export class NewGame {
  constructor(selector, options) {
    // Создаем новоый элемент класса dom
    this.$el = $(selector)
    this.store = options.store
    this.components = options.components || []
  }

  // Тут методом перебра всех классов добавляем создаем верстку для игры
  // самый запутанный момент в наследовании!!
  getRoot() {
    const $root = $.create('div', 'game_window')

    const componentOptions = {
      store: this.store
    }

    this.components = this.components.map(Component => {
      // берем методы из класса dom но не через создание нового класса, а через вызов функции
      const $el = $.create('div', Component.className)
      // Component это один из массива компонентов, который мы изничально передали для перебора
      const component = new Component($el, componentOptions)
      // вызываем метод класса dom что бы отобразить верстку
      $el.html(component.toHTML())
      // Добавляем новый компонент в разментку
      $root.append($el)
      return component
    })
    return $root
  }
  //

  render() {
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
  }
}
