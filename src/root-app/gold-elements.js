import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/gold-phone-input/gold-phone-input.js';
import '@polymer/gold-cc-input/gold-cc-input.js';
import '@polymer/gold-cc-cvc-input/gold-cc-cvc-input.js';
import '@polymer/gold-zip-input/gold-zip-input.js';
import '@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class GoldElements extends PolymerElement {

    static get properties() {
        return {
            phone: {
                type: String
            },
            creditCard: {
                type: String
            },
            ccExpire: {
                type: String
            },
            cvc:{
                type: String
            },
            zip: {
                type: String
            }

        }
    }
    _handleSubmit() {
        console.log("_handleSubmit", this.$.goldElementsForm.validate());  
        let obj = {phone: this.phone, creditCard: this.creditCard, expiration: this.ccExpire, cvc: this.cvc, zip: this.zip};
            console.log(obj);      
        if(this.$.goldElementsForm.validate()) {
            
        }
    }
    static get template() {
        return html`
            <iron-form id="goldElementsForm">
            <form>
                <gold-phone-input
                auto-validate
                name="phone"
                value={{phone}}
                required
                label="Enter Phone number"
                error-message="Enter Valid phone number">
                </gold-phone-input>
            
                <gold-cc-input card-type="{{cardType}}"  name="creditCard" value={{creditCard}} error-message="CC is required"></gold-cc-input>
                <gold-cc-expiration-input name="ccExpire" value={{ccExpire}} required error-message="cc expriration date is required"></gold-cc-expiration-input>
                <gold-cc-cvc-input card-type="[[cardType]]" name="cvc" value={{cvc}} required error-message="cvc is required"></gold-cc-cvc-input>
                <gold-zip-input auto-validate required name="zip" value={{zip}} error-message="zip code is required"></gold-zip-input>
                <paper-button on-click="_handleSubmit"> Submit</paper-button>
            </form>
            </iron-form>
        `;
    }
}

window.customElements.define('gold-elements', GoldElements);