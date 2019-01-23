import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class AppRouteElement extends PolymerElement {

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
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>     

        
        <app-drawer-layout fullbleed="" narrow="{{narrow}}">
          <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">     
            <section>     
                <iron-selector selected="[[page]]" attr-for-selected="name" role="navigation">
                <div class="item"> <a name="simple" href="simple">Simple Component</a></div>
                <div class="item"> <a name="props" href="props">Properties declaration Component </a></div>
                <div class="item"> <a name="lifecycle" href="lifecycle">Custom Component Lifecycle </a></div>
                <div class="item"> <a name="param" href="param?id=124">Pass Param in url </a></div>
                <div class="item"> <a name="ajax" href="ajax">Iron Ajax</a> </div>
                <div class="item"> <a name="form" href="form">Iron Form</a> </div>
                </iron-selector>
              </section>
          </app-drawer>

          <app-header-layout has-scrolling-region="">
            <app-header slot="header">
                <app-toolbar>
                    <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
                    <div main-title="">My App</div>
                </app-toolbar>
            </app-header>          
                
            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
                <simple-component name="simple"></simple-component>
                <properties-declaration name="props"></properties-declaration>
                <custom-component-lifecycle name="lifecycle"></custom-component-lifecycle>
                <app-layout-element name="layout"></app-layout-element>
                <url-param name="param"></url-param>
                <iron-ajax-component name="ajax"></iron-ajax-component>
                <iron-form-component name="form"></iron-form-component>
                <not-found name="view404"></not-found>
            </iron-pages>

          </app-header-layout>
        </app-drawer-layout>

        `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        }
    }
    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        //console.log(page)
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'notfound'.
        if (!page) {
            this.page = 'simple';
        } else if (['simple', 'props', 'layout', 'lifecycle', 'param', 'ajax', 'form'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'notfound';
        }

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    _pageChanged(page) {
        //console.log(page)
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
            case 'simple':
                import('./simple-component.js');
                break;
            case 'props':
                import('./properties-component.js');
                break;
            case 'lifecycle':
                import('./custom-component-lifecycle.js');
                break;
            case 'param':
                import('./url-param.js');
                break;
            case 'ajax':
                import('./iron-ajax-component.js');
                break;
            case 'form':
                import('./iron-form-component.js');
                break;
            case 'notfound':
                import('./not-found.js');
                break;
        }
    }
}

window.customElements.define('app-route-element', AppRouteElement);