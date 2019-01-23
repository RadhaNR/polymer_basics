import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class EventComponent extends PolymerElement {
    static get template() {
        return html `
            <div>EVent component </div>
        `;
    }    
}

window.customElements.define('event-component', EventComponent);