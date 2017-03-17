'use babel'
/** @jsx etch.dom */
import etch from 'etch'

export default class SymbolQuickPaneView {
  constructor(model) {
    this.model = model
    this.panel = atom.workspace.getLeftPanels()[0]
    console.log(this.panel.getItem())

    etch.initialize(this)
  }

  render() {
    return (
      <div className="indentation-status-view inline-block">
        {this.model.getText()}
      </div>
    )
  }

  update() {
    return etch.update(this)
  }

  destroy() {
    return etch.destroy(this)
  }
}
