import XButton from 'x/button'
import { createElement } from 'lwc'

describe('basic test suite', () => {
  it('renders a button on the client side', async () => {
    const button = createElement('x-button', { is: XButton })
    document.body.appendChild(button)
    await Promise.resolve()
    expect(button.shadowRoot.querySelector('button').textContent).toBe('I am a button!')
  })
})
