/** @babel */

import SymbolQuickPane from '../lib/symbol-quick-pane'

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SymbolQuickPane', () => {
  let workspaceElement, activationPromise

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)
    activationPromise = atom.packages.activatePackage('symbol-quick-pane')
  })

  describe('when the symbol-quick-pane:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.symbol-quick-pane')).not.toExist()

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'symbol-quick-pane:toggle')

      waitsForPromise(() => {
        return activationPromise
      })

      runs(() => {
        expect(workspaceElement.querySelector('.symbol-quick-pane')).toExist()

        let symbolQuickPaneElement = workspaceElement.querySelector('.symbol-quick-pane')
        expect(symbolQuickPaneElement).toExist()

        let symbolQuickPanePanel = atom.workspace.panelForItem(symbolQuickPaneElement)
        expect(symbolQuickPanePanel.isVisible()).toBe(true)
        atom.commands.dispatch(workspaceElement, 'symbol-quick-pane:toggle')
        expect(symbolQuickPanePanel.isVisible()).toBe(false)
      })
    })

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement)

      expect(workspaceElement.querySelector('.symbol-quick-pane')).not.toExist()

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'symbol-quick-pane:toggle')

      waitsForPromise(() => {
        return activationPromise
      })

      runs(() => {
        // Now we can test for view visibility
        let symbolQuickPaneElement = workspaceElement.querySelector('.symbol-quick-pane')
        expect(symbolQuickPaneElement).toBeVisible()
        atom.commands.dispatch(workspaceElement, 'symbol-quick-pane:toggle')
        expect(symbolQuickPaneElement).not.toBeVisible()
      })
    })
  })
})
