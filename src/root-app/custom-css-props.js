import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/polymer/lib/elements/custom-style.js';

/**
 * @customElement
 * @polymer
 */
class CustomCssProps extends PolymerElement {
    static get template() {
        return html`
        <custom-style>  
          <style>         
            div{
                color: var(--color, var(--defaultColor));
            }
           </style>
        </custom-style>

        <div>this div is styled using custom css properties</div>
        `;
    }
}

window.customElements.define('custom-css-props', CustomCssProps);