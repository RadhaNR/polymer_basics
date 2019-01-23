import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/demo/sample-content.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import './properties-declaration.js';

class AppLayoutElements extends PolymerElement {
    static get template() {
        return html` 
        <style>
            app-drawer section {
                height: 100%;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }
            
            app-header {
            color: #fff;
            background-color: #C62828;
            width: 100%;
            margin-left: -20px;   
            }
        
            .item {
                border-bottom: 1px solid #eee;
                height: 30px;
                padding: 10px;
            }
        </style>
        <app-drawer-layout>
          <app-drawer swipe-open slot="drawer">     
            <section>     
              <h2>Side Menu</h2>
              <iron-list>
                <div class="item">Item11 </div>
                <div class="item">Item22 </div>
                <div class="item">Item33 </div>
                <div class="item">Item44 </div>
                <div class="item">Item55 </div>
                <div class="item">Item66 </div>
                <div class="item">Item11 </div>
                <div class="item">Item22 </div>
                <div class="item">Item11 </div>
                <div class="item">Item22 </div>
                <div class="item">Item11 </div>
                <div class="item">Item22 </div>
                <div class="item">Item33 </div>
                <div class="item">Item44 </div>
                <div class="item">Item55 </div>
                <div class="item">Item66 </div>
              </iron-list>
              </section>
          </app-drawer>

          <app-header-layout>
            <app-header slot="header">
              <app-toolbar>
                <paper-icon-button icon="app:menu" drawer-toggle></paper-icon-button>
                <div condensed-title>Test Drive app-header</div>
              </app-toolbar>              
            </app-header>           
           <sample-content size=200></sample-content>
           <properties-declaration></properties-declaration>
          </app-header-layout>
        </app-drawer-layout>
      `;
    }

}

window.customElements.define('app-layout-elements', AppLayoutElements);