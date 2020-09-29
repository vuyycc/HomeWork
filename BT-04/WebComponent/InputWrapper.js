class formRegister extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <input-wrapper label="Ten dang ki" type="email" value="gia tri mac dinh" error=""></input-wrapper>
        <input-wrapper label="Email" type="email" value="gia tri mac dinh" error=""></input-wrapper>
        <input-wrapper label="Password" type="email" value="gia tri mac dinh" error=""></input-wrapper>
        <input-wrapper label="Xac thuc password" type="email" value="gia tri mac dinh" error=""></input-wrapper>
        `;
  }
}
window.customElements.define("form-register", formRegister);


class inputWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    let $wrapper = document.getElementsByClassName('input-wrapper');
    this.shadowRoot.appendChild($wrapper.content.cloneNode(true));
     this.$label = this.shadowRoot.getElementById('input-label');
     this.$main = this.shadowRoot.getElementById('input-main');
    this.$error = this.shadowRoot.getElementById("input-error");
  }

  static get observedAttributes(){
    return ['label','value','error'];
  }

  attributeChangedCallback( name, oldValue, newValue) {
    if(name == 'label'){
      this.$label.innerHTML = newValue;
    }else if(name == 'value'){
      this.$main.innerHTML = newValue;
    }else if(name == 'error'){
      this.$error.innerHTML = newValue;
    }
  }

}

window.customElements.define('input-wrapper', inputWrapper);

