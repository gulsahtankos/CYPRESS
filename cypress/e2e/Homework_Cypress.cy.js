describe('Login ve Logout Testleri', function(){

    it('Test 1', function(){

        cy.login("user888@gmail.com", "1234567890")

        cy.wait(3000)

        cy.get('#open-navigation-menu-mobile').click()

        cy.contains('Log out').click()

    })

    it('Test 2', function(){

        cy.login("testowyqa@qa.team", "QA!automation-1")

        cy.wait(3000)

        cy.get('#open-navigation-menu-mobile').click()

        cy.contains('Log out').click()

    })

})