const $templateInput = document.getElementById('template-input-wrapper');

class InputWrapper extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($templateInput.content.cloneNode(true));
        this.$label = this.shadowRoot.getElementById('label-input');
        this.$input = this.shadowRoot.getElementById('input-main');
        this.$error = this.shadowRoot.getElementById('input-error');
    }

    static get observedAttributes(){
        return ['label','type','value','error'];
    }

    attributeChangedCallback(nameAttri, oldValue, newValue){
        if(nameAttri == 'label'){
            this.$label.innerHTML = newValue;
        }else if(nameAttri == 'type'){
            this.$input.type = newValue;
        }
        else if(nameAttri =='value'){
            this.$input.value = newValue;
        }
        else if(nameAttri =='error'){
            this.$error.innerHTML = newValue;
        }
    }
    get value(){
        return this.$input.value;
    }

    set error(message){
        this.setAttribute('error',message);
    }
}

window.customElements.define('input-wrapper',InputWrapper);