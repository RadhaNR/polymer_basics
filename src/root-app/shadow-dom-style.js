import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class ShadowDomStyle extends PolymerElement {
    static get template() {
        return html`
        <!-- Encapsulated, element-level stylesheet -->
        <style>
          p {
            color: green;
          }
          .myclass {
            color: red;
          }
        </style>
        <p>I'm a shadow DOM child element of <code>custom-element</code>.</p>
        <p class="myclass">So am I.</p>
        `;
    }
}

window.customElements.define('shadow-dom-style', ShadowDomStyle);