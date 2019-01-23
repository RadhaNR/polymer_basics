define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class RootApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `}static get properties(){return{prop1:{type:String,value:"root-app"}}}}window.customElements.define("root-app",RootApp)});