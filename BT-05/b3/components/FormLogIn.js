const $template1 = document.getElementById('template-form-login');

class FormLogin extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template1.content.cloneNode(true));
        this.$formLogin = this.shadowRoot.querySelector('.form-login-f');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');

        this.$formLogin.onsubmit = (event) => {

            event.preventDefault();
            this.login();
        }

    };

    login() {
        let email = this.$email.value;
        let password = this.$password.value;

        if(this.validate(email, password)) {
            alert(`Đăng nhập thành công !! `);
        }
    }

    validate(email, password){
        let isPassed = true;
        if(email == ''){
            this.$email.error = 'Vui lòng nhập tên';
            isPassed = false;
        }
        else {
            this.$email.error = "";
        }

        if(password == ''){
            this.$password.error = 'Vui lòng nhập mật khẩu';
            isPassed = false;
        }else {
            this.$password.error = '';
        }

        return isPassed;
    }

}


window.customElements.define('form-login', FormLogin);