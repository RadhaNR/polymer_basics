import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { ParentComponent } from './parent-component.js';
/**
 * @customElement
 * @polymer
 */
class InheritTemplateComponent extends ParentComponent {

    // Parent component template will render here
}

window.customElements.define('inherit-template', InheritTemplateComponent);