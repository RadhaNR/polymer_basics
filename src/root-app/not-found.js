import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class NotFound extends PolymerElement {
    static get template() {
        return html `
            <div>Page Not Found </div>
        `;
    }    
}

window.customElements.define('not-found', NotFound);