import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import {ParentComponent} from './parent-component.js';
/**
 * @customElement
 * @polymer
 */
class OverrideTemplate extends ParentComponent {
        
    // declare your properties
    static get properties() {
        return {
            // properties objects
        }
    }
    // template
    static get template() {
        return html `
            <div>This content is from child class </div>
        `;
    }    
}

window.customElements.define('override-template', OverrideTemplate);