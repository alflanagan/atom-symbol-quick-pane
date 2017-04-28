'use babel'

import SymbolQuickPaneView from './symbol-quick-pane-view'
import {CompositeDisposable, Disposable} from 'atom'

export default {
  get packageURI() {return 'atom://symbol-quick-pane'},
  view : null,
  subscriptions : null,

  activate(state) {  //eslint-disable-line no-unused-vars
    this.subscriptions = new CompositeDisposable(
      // Add an opener for our view.
      atom.workspace.addOpener(uri => {
        if (uri === this.packageURI) {
          return new SymbolQuickPaneView()
        }
      }),

      // Register command that toggles this view
      atom.commands.add('atom-workspace', {
        'symbol-quick-pane:toggle': () => this.toggle()
      }),

      // Destroy any SymbolQuickPaneViews when the package is deactivated.
      new Disposable(() => {
        atom.workspace.getPaneItems().forEach(item => {
          if (item instanceof SymbolQuickPaneView) {
            item.destroy()
          }
        })
      })
    ) // new CompositeDisposable
  }, // activate()

  deactivate() {
    this.subscriptions.dispose()
  },

  toggle() {
    atom.workspace.open(this.packageURI)
  },

  deserializeSymbolQuickPaneView() {
    return new SymbolQuickPaneView()
  }
}
