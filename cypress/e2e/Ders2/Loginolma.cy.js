describe('Login Olma Testi', function(){

    it('tc01_yonetici ile login olma testi', function(){

        cy.login("user888@gmail.com","1234567890")

        // cy.visit('https://www.edu.goit.global/account/login')
        // cy.get('#user_email').type("user888@gmail.com")
        // cy.get('#user_password').type("1234567890")
        // cy.get('.next-1jphuq5').click();

    })

    it('tc02_kullanici ile login olma testi', function(){

        cy.login("andy.moko.98@gmail.com","Andy_Moko78")

        //cy.visit('https://www.edu.goit.global/account/login')
        //cy.get('#user_email').type("andy.moko.98@gmail.com")
        // cy.get('#user_password').type("Andy_Moko78")
        // cy.get('.next-1jphuq5').click();

    })

    it('tc03_misafir ile login olma testi', function(){

        cy.login("mrdusty@duniakeliling.com","mrdusty@duniakeliling.com")

        // cy.visit('https://www.edu.goit.global/account/login')
        // cy.get('#user_email').type("mrdusty@duniakeliling.com")
        // cy.get('#user_password').type("mrdusty@duniakeliling.com")
        // cy.get('.next-1jphuq5').click();

    })

})
