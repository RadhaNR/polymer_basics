import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class RootApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          color: red;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'root-app'
      }
    };
  }
}

window.customElements.define('root-app', RootApp);
