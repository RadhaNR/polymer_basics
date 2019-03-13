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
            skillSelected: {
                type: String,
                value: ''
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
            let obj = {firstName: this.firstName, lastName: this.lastName, checkbox: this.checkbox, skill: this.skillSelected}
            console.log(obj)
        }
    }
   
    _itemSelected (e) {
        //console.log(e.target.selectedItem.textContent)
        var selectedItem = e.target.selectedItem;
        if (selectedItem) {
            this.skillSelected = selectedItem.value;
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
                <paper-input name="firstName" value={{firstName}} label="First Name" required error-message="Pls enter First Name" id="firstName"></paper-input>
                <paper-input type="password" name="lastName" value={{lastName}} label="Last Name" required  pattern="[a-zA-Z]*" error-message="letters only!" id="lastName"></paper-input>
                <paper-checkbox name="checkbox" value="{{checkbox}}" ></paper-checkbox>
                               
                <paper-dropdown-menu name="skillSelected" label="Select Skill"  on-iron-select="_itemSelected">
                    <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <dom-repeat items={{skills}}>
                           <template> <paper-item value={{item.name}}>{{item.name}}</paper-item></template>
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