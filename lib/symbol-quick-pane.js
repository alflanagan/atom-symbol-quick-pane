'use babel'

import SymbolQuickPaneView from './symbol-quick-pane-view'
import SymbolQuickPaneModel from './symbol-quick-pane-model'
import {CompositeDisposable} from 'atom'

export default {

  view : null,
  model : null,
  modalPanel : null,
  subscriptions : null,

  activate(state) {
    this.model = new SymbolQuickPaneModel(state)
    this.view = new SymbolQuickPaneView(this.model)
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // need to: collect symbols for currently active editor (if any) register listener for changes to
    // active editor
    //
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'symbol-quick-pane:toggle': () => this.toggle()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
    this.view.destroy()
  },

  serialize() {
    return this.model.serialize()
  },

  toggle() {
    console.log('SymbolQuickPane was toggled!')
    if (this.modalPanel) {
      return this.modalPanel.isVisible()
        ? this.modalPanel.hide()
        : this.modalPanel.show()
    } else {
      return null
    }
  }
}
