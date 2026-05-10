describe('ilk dersimiz', function(){

    it("TC01 ilk test senaryomuz", function(){

        // 1. cy Cypress test kütüphanesinin temel komutudur.
        // 2. visit() --> url gider

        cy.visit('https://www.edu.goit.global/account/login');

        // locate selectors
        /*
        1. id #
        2. class .
        3. atr=value --> [name='email']
        */

        cy.get('#user_password').type('1234567890');

        // click() --> sol click yapar
        cy.get('.next-1jphuq5').click();

        // contains('') --> locate almak için kullanılır, text içermesine göre locate alabiliriz.
        // contains('Email')

        // url() --> sayfanın url bilgisini verir
        cy.url().should('include', 'www.edu.goit.global');

        // title() --> sayfanın başlığını alır
        cy.title().should('include', 'Log in');

        // wait() --> milisaniye kadar bekler
        cy.wait(2000);
        //10. title() --> sayfanın başlığını alır
        cy.title().should('include', 'Log in')

        //11. wait(2000) --> milisaniye kadar bekler
        cy.wait(3000);

       //12. dblclick() --> çift click yapar
       cy.get('.next-1jphuq5').dblclick();
       cy.wait(3000);

       //13. rightclick() --> sağ click yapar
cy.get('.next-1jphuq5').rightclick();

// 14. should() --> and()
// should('have.text','expected')
//be.visible-- gorunur olup olmadigini dogrular
//should('not.be.visible');
//should('not.exist');
//should('have.value', 'myUsername');
//should('have.class', 'active');
//should('be.checked');
//.should('not.be.checked');
cy.get('.next-1jphuq5')
.should('have.text','Log in')
.and('be.visible')
.and('exist');

//15. check()
//cy.get().check().should(be.checked);
    })
})




