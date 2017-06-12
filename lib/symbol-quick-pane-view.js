/** @babel */
/** @jsx etch.dom */

import etch from 'etch'

export default class SymbolQuickPaneView {
  constructor() {
    this.subscriptions = null

    etch.initialize(this)
  }

  render() {
    // content included in component .element property
    // atom.grammars.idsByScope
    return <div className="symbol-quick-pane">hello, world</div>

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

  update(props, children) { // eslint-disable-line no-unused-vars
    // custom update handling here
    return etch.update(this)
  }

  async destroy() {
    await etch.destroy(this)
  }

  serialize() {
    return {
      deserializer: 'symbol-quick-pane/SymbolQuickPaneView'
    }
  }

}
