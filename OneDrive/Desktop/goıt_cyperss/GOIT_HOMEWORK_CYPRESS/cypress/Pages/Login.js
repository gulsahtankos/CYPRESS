  class Login {


    //Bu method ilgili URL'ye gider.
    navigateUrl(){
        cy.visit("https://www.edu.goit.global/account/login");
    }
    //Bu method Title alanının kontrolünü sağlar.
    checkTitle(title){
        cy.get('.next-10stgr7 > .next-c1vj7d')
          .should("be.visible")
          .and("have.text", title);
    }
    //Bu method Email alanının kontrolünü sağlar.
    checkEmailField(){
        cy.get('#user_email')
          .should("be.visible")
          .and("exist");
    }
        // bu method password alanının kontrolünü sağlar
        checkPasswordField(){
        cy.get('#user_password')
        .should("be.visible")
        .and("exist");
}

       // bu method login butonunun kontrolünü sağlar
       checkLoginButton(){
       cy.get('.next-1jphuq5')
       .should("be.visible")
       .and("exist");
}
      //Bu Method forgetpassword alanının kontrolünü sağlar.
      forgetPassword(){
      cy.get('.next-1v2ri13 > .next-mtc523')
      .should("be.visible")
      .and("have.text", "I can't remember the password");
}
    }

 
    export default new Login () ;