
import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';
/**
 * @customElement
 * @polymer
 */
class ChildComponent extends PolymerElement {
    static get properties() {
        return {
            targetName: {
                type: String,
                notify: true
            },
            id: {
                type: String
            },
            targetData: {
                type: String
            }
        }
    }
    _handleChange() {
        this.id = this.id + ' from Target';
        this.targetName = this.targetName + ' from target';
        this.$.targetData = this.targetData + ' no change';
    }
    static get template() {
        return html`
        <style>
        :host { 
           display: block;
        }
      </style>
            <div>Child Component </div>
            <div>Property Data(1-way): [[targetData]]</div>
            <div>Property Name(2-way): {{targetName}}</div>
            
            <div>Attribute Id: [[id]]</div>
            <paper-button raised on-click="_handleChange">Change from Target</paper-button>
        `;
    }
}

window.customElements.define('child-component', ChildComponent);