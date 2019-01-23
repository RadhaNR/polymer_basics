import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class EventComponent extends PolymerElement {

    ready() {
        super.ready();
        this.addEventListener('get-data', this._getData);
    }
    connectedCallback() {
        super.connectedCallback();
        const addEventBtn = this.$.addEvent;
        const customEleEvent = this.$.customEleEvent;
        customEleEvent.addEventListener('click', this._customEleEvent);
        addEventBtn.addEventListener('click', this._customChildEvent.bind(this)); // event on custom element child element       
    }

    disconnectedCallback() {
        addEventBtn.removeEventListener('click', function() {
            console.log('Click event removed!!!');
        });
    }

    _customChildEvent() {
        console.log('Click event is trigger on custom element child elements');
    }

    _customEleEvent() {
        console.log('Click event is trigger on custom element');
    }
    _onClickEvent() {
        console.log('button clicked!!')
    }
    _onMouseEnter() {
        console.log('mouse eneter event!!!')
    }
    _onMouseLeave() {
        console.log('mouse leave event!!!')
    }

    _handleCustomEvent() {
        this.dispatchEvent(new CustomEvent('get-data', {bubbles: true, composed: true, detail: {message: 'Hello i am data'}}));
    }

    _getData(e) {
        console.log(e.detail);
    }
    static get template() {
        return html `
            <div id="customEleEvent">
                <div>Annotated event Listner </div>
                <paper-button raised on-click="_onClickEvent" on-mouseenter="_onMouseEnter" on-mouseleave="_onMouseLeave">Annotated Events</paper-button>
                <hr/>
                <div>Add an event listener imperatively to a child element of a custom element</div>
                <button id="addEvent"> Add Event</button>
                <hr/>
                <paper-button on-click="_handleCustomEvent">Fire Custom Event</paper-button>
            </div>
        `;
    }    
}

window.customElements.define('event-component', EventComponent);