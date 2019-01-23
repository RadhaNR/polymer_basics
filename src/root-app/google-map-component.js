import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import '@em-polymer/google-map/google-map.js';
import '@em-polymer/google-map/google-map-marker.js';
//import { html } from '@polymer/polymer/lib/utils/html-tag.js'

/**
 * @customElement
 * @polymer
 */
class GoogleMapComponent extends PolymerElement {
    connectedCallback() {
        super.connectedCallback();
        // var map = document.querySelector('google-map');
        // map.latitude = 37.77493;
        // map.longitude = -122.41942;
        // map.addEventListener('google-map-ready', function(e) {
        //   alert('Map loaded!');
        // });
    }
    static get template() {
        return html`
    <style>
        google-map {
            height: 300px;
        }
        </style>
        <google-map latitude="37.77493" longitude="-122.41942" fit-to-markers>
  <google-map-marker latitude="37.779" longitude="-122.3892"
      draggable="true" title="Go Giants!"></google-map-marker>
  <google-map-marker latitude="37.777" longitude="-122.38911"></google-map-marker>
</google-map>
            <div>Map </div>
        `;
    }
}

window.customElements.define('google-map-component', GoogleMapComponent);