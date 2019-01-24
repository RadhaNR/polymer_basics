import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class ObjectArrayComponent extends PolymerElement {
    static get template() {
        return html `
            <div>Object and Array </div>
        `;
    }    
}

window.customElements.define('object-array-component', ObjectArrayComponent);