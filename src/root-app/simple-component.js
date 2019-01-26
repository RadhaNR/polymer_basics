import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class SimpleComponent extends PolymerElement {
        
    // declare your properties
    static get properties() {
        return {
            // properties objects
        }
    }
    // template
    static get template() {
        return html `
            <div>Custom component </div>
        `;
    }    
}

window.customElements.define('simple-component', SimpleComponent);