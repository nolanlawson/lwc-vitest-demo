import { renderComponent } from '@lwc/engine-server'
import { describe, it, expect } from 'vitest'
import XButton from 'x/button'

describe('basic ssr test suite', () => {
  it('renders a button on the server side', () => {
    const html = renderComponent('x-button', XButton)

    expect(html).toMatchSnapshot()
  })
})
