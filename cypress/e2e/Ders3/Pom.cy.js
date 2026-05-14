import Login from "../../Pages/Login";
import Login2 from "../../Pages/Login";

describe ("Page Object Model - POM", () =>{ ;

    it("tc02 Page Object Pattern", () => {
        
        Login.navigateUrl () ;
        Login.checkTitle ("Login") ;
        Login.checkEmailField () ;
        Login.checkPasswordField ()  ;
        Login.checkLoginButton () ;
        Login.forgetPassword ("I can't remember the password") ;
    });

    it("tc03 Page Object Pattern", () => {
        
        Login2.navigateUrl () ;
        Login2.checkTitle ("Login") ;
        Login2.checkEmailField () ;
        Login2.checkPasswordField ()  ;
        Login2.checkLoginButton () ;
        Login2.forgetPassword ("I can't remember the password") ;
    });

    it("tc04_Page Object Pattern Fixtures Kullanimi", () => {

    cy.fixture('login').then((data) => {

    Login2.navigateUrl();
    Login2.checkTitle("Login");
    Login2.checkEmailField();
    Login2.checkPasswordField();
    Login2.checkLoginButton();
    Login2.forgetPassword("I can't remember the password");

}); 





    });
