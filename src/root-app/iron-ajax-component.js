import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-ajax';
import '@polymer/paper-card';
import "@polymer/polymer/lib/elements/dom-repeat.js";
import '@polymer/paper-button';

/**
 * @customElement
 * @polymer
 */
class IronAjaxComponent extends PolymerElement {
    static get properties() {
        return {
            data: Array
        }
    }
    _handleResponse(event) {
        this.data = event.detail.__data.response.data;
    }
    static get template() {
        return html`
        <style>        
          paper-button.indigo {
            background-color: gray;
            color: white;           
          }
        </style>
        <iron-ajax 
        auto 
        id="ajax"
        url="https://reqres.in/api/users"
        on-response="_handleResponse"
        > </iron-ajax>
        <div>Number of User is --{{data.length}} </div><br/>
        <dom-repeat items={{data}}>
                <template>
                    <paper-card image="[[item.avatar]]" alt="House" class="white" style="margin-bottom:10px;">
                        <div class="card-actions">
                            <div>User Id: [[item.id]] </div>
                            <div>First Name: [[item.first_name]]</div>
                            <div>Last Name: [[item.last_name]]</div>
                            <paper-button raised class="custom indigo">View</paper-button>
                            <paper-button raised>OK</paper-button>
                        </div>
                    </paper-card>
                </template>
            </dom-repeat>
           
        `;
    }

}

window.customElements.define('iron-ajax-component', IronAjaxComponent);