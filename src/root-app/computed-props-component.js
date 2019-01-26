import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class ComputedPropsComponent extends PolymerElement {
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
                type: String,
                computed: '_nameChanged(firstName, lastName)'
            }
            
        }
    }

    _nameChanged(firstName, lastName) {
        console.log(firstName, lastName);
        return firstName + ' ' + lastName;
    }

    _handleChange() {
        this.firstName = this.firstName + 1;
        this.lastName = this.lastName + 2;
    }

    static get template() {
        return html `
            <div>Computed Properties </div>
            <div>First Name: {{firstName}}</div>
            <div>Last Name: {{lastName}}</div>
            <div>Full Name : {{fullName}} </div>
            <paper-button raised on-click="_handleChange">Update</paper-button>
        `;
    }    
}

window.customElements.define('computed-props-component', ComputedPropsComponent);