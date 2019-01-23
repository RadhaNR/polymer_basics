import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class CustomComponentLifecycle extends PolymerElement {

    constructor() {
        super();
        this.value = 1; // initialize default  values in constructor
        console.log("in constructor");
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("in connectedCallback");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log("in disconnectedCallback");
    }

    ready() {
        super.ready();
        console.log("in ready");
    }

    attributeChangedCallback() {
        super.attributeChangedCallback();
        console.log("in attributeChangedCallback")
    }

    buttonClicked() {
        console.log("button clicked!!!")
    }

    static get template() {
        return html`<button id="btn">Click Here</button>`;
    }
}

window.customElements.define('custom-component-lifecycle', CustomComponentLifecycle);