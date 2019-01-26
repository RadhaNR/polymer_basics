import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-if.js';
/**
 * @customElement
 * @polymer
 */
class domIfComponent extends PolymerElement {
        
    // declare your properties
    static get properties() {
        return {
            isShow: {
                type: Boolean,
                value: true
            }
        }
    }
    _onChange() {
        this.isShow = !this.isShow;
    }
    // template
    static get template() {
        return html `
            <template is="dom-if" if={{isShow}}>
                <div>Showing content</div>
            </template>
            <paper-button raised on-click="_onChange">Show & Hide</paper-button>
        `;
    }    
}

window.customElements.define('dom-if-component', domIfComponent);