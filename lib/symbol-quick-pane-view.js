'use babel'
/** @jsx etch.dom */
import etch from 'etch'

export default class SymbolQuickPaneView {
  constructor() {
    // Create root element
    this.element = document.createElement('div')
    this.element.classList.add('symbol-quick-pane')

    this.subscriptions = null

    etch.initialize(this)
  }

  render() {
    return (
      <div className="symbol-quick-pane">hello, world</div>
    )
  }

  getURI() {
    return 'atom://symbol-quick-pane'
  }

  getElement() {
    return this.element
  }

  getTitle() {
    // text on pane tab
    return 'Quick Symbol'
  }

  getDefaultLocation() {
    return 'left'
  }

  getAllowedLocations() {
    return ['left', 'right', 'bottom', 'top']
  }

  update() {
    return etch.update(this)
  }

  destroy() {
    return etch.destroy(this)
  }

  serialize() {
    return {
      deserializer: 'symbol-quick-pane/SymbolQuickPaneView'
    }
  }

}
