import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class TemplateRepeatComponent extends PolymerElement {
    static get properties() {
        return {
            productArry: {
                type: Array,
                value: [
                    { name: 'iPhone 5' },
                    { name: 'iPhone 6' },
                    { name: 'iPhone 7' }
                ]
            }
        }
    }
    
    static get template() {
        return html`
           
            <div>Array Item:</div>
            <dom-repeat items={{productArry}}>
                <template>
                    <div>{{item.name}}</div>
                </template>
            </dom-repeat>
           
        `;
    }

}
window.customElements.define('template-repeat-component', TemplateRepeatComponent);