import { createElement } from 'lwc'
import { describe, it, expect } from 'vitest'
import XButton from 'x/button'

describe('basic test suite', () => {
  it('renders stylesheets', async () => {
    const button = createElement('x-button', { is: XButton })
    document.body.appendChild(button)
    await Promise.resolve()
    const adoptedOrInlineStylesheets = button.adoptedStyleSheets ?? button.shadowRoot.querySelectorAll('style')
    expect(adoptedOrInlineStylesheets.length).toBe(1, 'Should render a stylesheet')
  })
})
