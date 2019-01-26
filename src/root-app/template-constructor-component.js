import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-if.js';
/**
 * @customElement
 * @polymer
 */
class TemplateConstructorComp extends PolymerElement {
        
    // declare your properties
    static get properties() {
        return {
            isShow: {
                type: Boolean,
                value: true
            }
        }
    }
   
    // template
    static get template() {
        return html `
            this text is from template constructor
        `;
    }    
}

window.customElements.define('template-constructor', TemplateConstructorComp);