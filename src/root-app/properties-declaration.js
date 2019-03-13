import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat.js";

class PropertiesDeclaration extends PolymerElement {

    constructor() {
        super();
        this.defaultData = 'Pls find the below Information'; // default in constructor
    }    

    static get properties() {
        return {
            name: {
                type: String,
                value: 'HCL' // default in properties
            },
            age: {
                type: Number,
                value: 42
            },
            isExist: {
                type: Boolean,
                value: 'Yes'
            },
            fullName: {
                type: Object,
                value: { name: 'HCL Technologies' }
            },
            locations: {
                type: Array,
                value: [
                    { locationName: "Bangalore" },
                    { locationName: "Chennai" },
                    { locationName: "Pune" }
                ]
            },
            defaultData: String
        }
    }

    static get template() {
        return html`
            <div>
                <h1>[[defaultData]] :</h1>
                <span>Name : [[name]]</span>
                <div id="age">Age: {{age}}</div>
                <div id="isExist">Exist in India: [[isExist]]</div>
                <div class="fullName">Full Name: "[[fullName.name]]"</div>

                Locations:
                <dom-repeat items={{locations}}>
                    <template>
                    <li>[[index]] : [[item.locationName]]</li>
                    </template>
                </dom-repeat>

            </div>
        `;
    }
}

window.customElements.define('properties-declaration', PropertiesDeclaration);
