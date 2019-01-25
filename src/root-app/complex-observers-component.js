import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class ComplexObservesComponent extends PolymerElement {
    static get properties() {
        return {
            firstName: {
                type: String,
                value: 'Radha'
            },
            lastName: {
                type: String,
                value: 'N'
            },
            fullName: {
                type: String
            }
            
        }
    }

    static get observers() {
        return [
            '_fullNameChange(firstName, lastName)'
        ]
    }

    _fullNameChange(firstName, lastName) {
        console.log(firstName, lastName);
        this.fullName = firstName + ' ' + lastName;
    }

    _handleChange() {
        this.firstName = this.firstName + 1;
        this.lastName = this.lastName + 2;
    }

    static get template() {
        return html `
            <div>Complex Observers component </div>
            <div>First Name: {{firstName}}</div>
            <div>Last Name: {{lastName}}</div>
            <div>Full Name : {{fullName}} </div>
            <paper-button raised on-click="_handleChange">Update</paper-button>
        `;
    }    
}

window.customElements.define('complex-observers-component', ComplexObservesComponent);