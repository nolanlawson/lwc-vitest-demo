import {LightningElement, api} from 'lwc'

export default class extends LightningElement {
  @api text = 'I am a button!'

  ssr = import.meta.env.SSR

  clicked = false

  onClick() {
    this.clicked = true
  }
}
