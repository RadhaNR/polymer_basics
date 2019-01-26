import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class SubPropsComponent extends PolymerElement {
    static get properties() {
        return {
            userObj: {
                type: Object,
                value: { firstName: 'Radha', lastName: 'N' }
            },
            productArry: {
                type: Array,
                value: [
                    { name: 'iPhone 5' },
                    { name: 'iPhone 6' },
                    { name: 'iPhone 7' }
                ]
            }
        }
    }
    static get observers() {
        return [
            '_userNameChanged(userObj.*)',
            '_productArryChange(productArry.*)'
        ]
    }

    _userNameChanged(userObj) {
        console.log('userObj is chnage and complex observer is triggered: ' , userObj);
    }

    _productArryChange(productArry){
        console.log('productArry is chnaged and compolex observer is triggered: ', productArry);
    }

    _ObjChange() {
        //console.log(this.userObj.firstName)

        //***** unobservable change  ****
        //this.userObj.firstName = this.userObj.firstName + 1; 
       
        // ******** use "set" method to observe the sub-properties change******        
        //this.set('userObj.firstName', this.userObj.firstName + 1);  
        //this.set('userObj.lastName', this.userObj.lastName + 1);   // use "set" method to observe the sub-properties change

        // ***** Batch multiple properties changes *****
        this.setProperties({
            'userObj.firstName': this.userObj.firstName + 1,
            'userObj.lastName': this.userObj.lastName + 1
        });
    }

    // array mutation methods - > 
        //push(path, item1, [..., itemN])
        // pop(path)
        // unshift(path, item1, [..., itemN])
        // shift(path)
        // splice(path, index, removeCount, [item1, ..., itemN])

    _updateItem() {
        // When your using "set" or "notifyPath" method, you need to specify exact path. 
        this.set('productArry.1.name', Math.random());
        //this.set('productArry.1.name', this.productArry[1].name + Math.random());
    }

    _removeItem() {
        this.pop('productArry', 1);  // use splice to remove perticular item
    }

    _addItem() {
        this.push('productArry', { name: 'iPhone 8' });        
        // this.set('productArry', { name: 'iPhone XXXXX'});
    }

    _emptyArray() {
        this.set('productArry', []);
    }

    static get template() {
        return html`
            <div>Sub props chnages</div>
            <div>User Name(Obj): {{userObj.firstName}} {{userObj.lastName}}</div><paper-button raised on-click="_ObjChange">Change Obj</paper-button>
            <hr/>
            <div>Array Item:</div>
            <dom-repeat items={{productArry}}>
                <template>
                    <div>{{item.name}}</div>
                </template>
            </dom-repeat>
            <paper-button raised on-click="_addItem"> Add item to Array</paper-button>
            <paper-button raised on-click="_removeItem"> Remove item from Array</paper-button>
            <paper-button raised on-click="_updateItem"> Update item in array</paper-button>
            <paper-button raised on-click="_emptyArray"> Empty array</paper-button>
        `;
    }

}
window.customElements.define('sub-props-component', SubPropsComponent);