import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * @customElement
 * @polymer
 */
class IronFormComponent extends PolymerElement {

    static get properties() {
        return {
            firstName: {
                type: String
            },
            lastName: {
                type: String
            },
            skills: {
                type: Array,
                value: [
                    {
                        name: 'AngularJS'
                    },
                    {
                        name: 'PolymerJs'
                    },
                    {
                        name: 'ReactJS'
                    }
                ]
            },
            checkbox: {
                type: String
            }
        }
    }
    _handleSubmit() {       
        if(this.$.demoForm.validate()) {
            let obj = {firstName: this.firstName, lastName: this.lastName, checkbox: this.checkbox}
            console.log(obj)
        }
    }
   
    static get template() {
        return html`
        <style>
        .custom{
            background-color: gray;
        }
        </style>
        <iron-form id="demoForm">
            <form >
                <paper-input name="firstName" value={{firstName}} label="First Name" required error-message="Pls enter First Name"></paper-input>
                <paper-input type="password" name="lastName" value={{lastName}} label="Last Name" required  pattern="[a-zA-Z]*" error-message="letters only!"></paper-input>
                <paper-checkbox name="checkbox" value="{{checkbox}}" required></paper-checkbox>
                <paper-dropdown-menu label="Select" required>
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <dom-repeat items={{skills}}>
                           <template> <paper-item>{{item.name}}</paper-item></template>
                        </dom-repeat>                        
                    </paper-listbox>
                </paper-dropdown-menu>
                <paper-button raised class="custom" on-click="_handleSubmit">Submit</paper-button>
            </form>
        </iron-form>
        `;
    }
    
}

window.customElements.define('iron-form-component', IronFormComponent);