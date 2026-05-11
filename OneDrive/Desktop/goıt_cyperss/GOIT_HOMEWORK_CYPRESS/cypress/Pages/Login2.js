  class Login2 {
  url="https://www.edu.goit.global/account/login";
  title='.next-10stgr7 > .next-c1vj7d';
  email='#user_email';
  password='#user_password';
  loginButton='.next-1jphuq5';
  forgetPassword='.next-1f1fv1i > .next-1qrvie4';

    //Bu method ilgili URL'ye gider.
    navigateUrl(){
        cy.visit("this.url");
    }
    //Bu method Title alanının kontrolünü sağlar.
    checkTitle(title){
        cy.get('this.title')
          .should("be.visible")
          .and("have.text", title);
    }
    //Bu method Email alanının kontrolünü sağlar.
    checkEmailField(){
        cy.get('this.email')
          .should("be.visible")
          .and("exist");
    }
        // bu method password alanının kontrolünü sağlar
        checkPasswordField(){
        cy.get('this.password')
        .should("be.visible")
        .and("exist");
}

       // bu method login butonunun kontrolünü sağlar
       checkLoginButton(){
       cy.get('this.loginButton')
       .should("be.visible")
       .and("exist");
}
      //Bu Method forgetpassword alanının kontrolünü sağlar.
      forgetPassword(){
      cy.get('this.forgetPassword')
      .should("be.visible")
      .and("have.text", "I can't remember the password");
}
    }

 
    export default new Login2 () ;