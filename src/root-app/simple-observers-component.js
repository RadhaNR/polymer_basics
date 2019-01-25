import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class SimpleObservesComponent extends PolymerElement {
    static get properties() {
        return {
            isLoggedIn: {
                type: Boolean,
                value: true,
                observer: '_isLoginUpdate'
            }
        }
    }

    _handleOnClick() {
        this.isLoggedIn = !this.isLoggedIn;
    }

    _isLoginUpdate(newValue, oldValue) {
        console.log(newValue, oldValue);
    }

    static get template() {
        return html `
            <div>Simple Observers component </div>
            <div>IsLoggedIn : [[isLoggedIn]] </div>
            <paper-button raised on-click="_handleOnClick">Update</paper-button>
        `;
    }    
}

window.customElements.define('simple-observers-component', SimpleObservesComponent);