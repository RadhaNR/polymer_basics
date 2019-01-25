import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class SubPropsComponent extends PolymerElement {
    static get properties() {

    }

    static get template() {
        return html `Sub props chnages`;
    }

}
window.customElements.define('sub-props-component', SubPropsComponent);