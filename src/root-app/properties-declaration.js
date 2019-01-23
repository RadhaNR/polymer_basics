import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat.js";

class PropertiesDeclaration extends PolymerElement {

    constructor() {
        super();
        this.defaultData = 'Pls find the below Information'; // default in constructor
    }
    static get template() {
        return html`
            <div>
                <div>[[defaultData]] :</div>
                <div>Name : [[name]]</div>
                <div>Age: {{age}}</div>
                <div>Exist in India: [[isExist]]</div>
                <div>Full Name: "[[fullName.name]]"</div>

                Locations:
                <dom-repeat items={{locations}}>
                    <template>
                    [[index]] : [[item.locationName]]
                    </template>
                </dom-repeat>

            </div>
        `;
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
}

window.customElements.define('properties-declaration', PropertiesDeclaration);
