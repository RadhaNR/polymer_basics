import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class SimpleComponent extends PolymerElement {
    static get template() {
        return html `
            <div>Simple component </div>
        `;
    }    
}

window.customElements.define('simple-component', SimpleComponent);