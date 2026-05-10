import Login from "../../Pages/Login";

describe ("Page Object Model - POM", () =>{ ;

    it("tc02 Page Object Pattern", () => {
        
        Login.navigateUrl () ;
        Login.checkTitle ("Login") ;
        Login.checkEmailField () ;
        Login.checkPasswordField ()  ;
        Login.checkLoginButton () ;
        Login.forgetPassword ("I can't remember the password") ;
    });

});
