import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
export class ParentComponent extends PolymerElement {
    static get properties() {
        return {
            name1: {
                type: String,
                value: 'Radha'
            }
        }
    }
    // template
    static get template() {
        return html `
            <div>This content is from parent component template == {{name1}} </div>
            <div>${this.firstTemplate}</div>
            <div>${this.secondTemplate}</div>
        `;
    }  
    
    static get firstTemplate() {
        return html `Parent First template`;
    }

    static get secondTemplate() {
        return html `Parent second template`;
    }
}

window.customElements.define('parent-component', ParentComponent);