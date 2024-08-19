import { createElement } from 'lwc'
import { describe, it, expect } from 'vitest'
import XButton from 'x/button'

describe('basic test suite', () => {
  it('renders a button on the client side', async () => {
    const button = createElement('x-button', { is: XButton })
    document.body.appendChild(button)
    await Promise.resolve()
    expect(button.shadowRoot.querySelector('button').textContent).toBe('I am a button!')
    expect(button).toMatchSnapshot()
  })

  it('clicks the button on the client side', async () => {
    const button = createElement('x-button', { is: XButton })
    document.body.appendChild(button)
    await Promise.resolve()
    button.shadowRoot.querySelector('button').click()
    await Promise.resolve()
    expect(button).toMatchSnapshot()
  })
})
