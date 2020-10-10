const $template = document.getElementById('template-blog');

class FormBlog extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$title = this.shadowRoot.getElementById("title");
        this.$img = this.shadowRoot.getElementById("img");
        this.$content = this.shadowRoot.getElementById("content");
    }

    static get observedAttributes(){
        return ['title','img','content'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name == 'title'){
            this.$title.innerHTML = newValue;
        }
        if(name == 'img'){
            this.$img.src = newValue;
        }
        if(name == 'content'){
            this.$content.innerHTML = newValue;
        }
    }
}

window.customElements.define('form-blog',FormBlog);