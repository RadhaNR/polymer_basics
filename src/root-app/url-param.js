import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import '@polymer/app-route/app-route.js';
/**
 * @customElement
 * @polymer
 */
class UrlParam extends PolymerElement {

    ready() {
        super.ready();
        console.log(this.route)
    }
    static get template() {
        return html`
            <app-location route="{{route}}"></app-location>

            <div>Param Id passed is  :  {{route.__queryParams.id}}</div>
        `;
    }

}

window.customElements.define('url-param', UrlParam);