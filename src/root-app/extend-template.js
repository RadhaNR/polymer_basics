import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import {ParentComponent} from './parent-component.js';
/**
 * @customElement
 * @polymer
 */
class ExtendTemplate extends ParentComponent {
        
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
            <hr/>
            <div>${super.template}</div>
        `;
    }    
}

window.customElements.define('extend-template', ExtendTemplate);