import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';
import './child-component.js';
/**
 * @customElement
 * @polymer
 */
class DataBindingComponent extends PolymerElement {

    static get properties() {
        return {
            hostName: {
                type: String,
                value: 'Testing Property'
            },
            id: {
                type: String,
                value: 'Testing attribute'
            },
            data: {
                type: String,
                value: '1 way data'
            }
        }
    }

    _handleClick() {
        this.hostName = this.hostName + ' from Host';
        this.data = this.data + ' from host';
    }
    static get template() {
        return html `
            <div>
                <div>Parent component </div>
                <div>Name(2-way): {{hostName}}</div>
                <div>Data(1-way): [[data]]</div>
                <div>Id: {{id}}</div>
                <paper-button raised on-click="_handleClick">Change From Host</paper-button>
                <hr/>
                <child-component target-name={{hostName}} id$={{id}} target-data=[[data]] /> <!-- Property binding-->
            </div>
        `;
    }    
}

window.customElements.define('data-binding-component', DataBindingComponent);