import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import {ParentComponent} from './parent-component.js';
/**
 * @customElement
 * @polymer
 */
class TemplateExtensionPoint extends ParentComponent {
        
    static get firstTemplate() {
        return html `child First template`;
    }

    static get secondTemplate() {
        return html `child second template`;
    }
}

window.customElements.define('template-extension-point', TemplateExtensionPoint);