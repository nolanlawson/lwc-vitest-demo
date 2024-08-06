import XButton from 'x/button?ssr'
import { renderComponent } from '@lwc/engine-server'

describe('basic ssr test suite', () => {
  it('renders a button on the server side', () => {
    const html = renderComponent('x-button', XButton)

    expect(html).toMatchSnapshot()
  })
})
