describe('ilk dersimiz', function() {

    it('TC01 ilk test senaryomuz', function() {

        // 1. cy cypress test kütüphanesinin temel komutudur.
        // 2. visit() --> url gider

        cy.visit('https://www.edu.goit.global/account/login')
        // 3. get () --> locate
        // 4.type () --> metin göndermek için kullanılır   
        cy.get ('#user_email').type ('Deneme')

        // 5.clear () --> metin silmeye yarar
        //6.as () --> Allias olarak bir elemente isim verebiliriz
        //cy.get('#user_email').as('email');
        //cy.get('@email').clear();
        // locate- selectors
        /*
        1. id #
        2. class .
        3. atr=value ---> [name='email']
        */
        cy.get('[name="password"]').type('1234567890')
        
        //7. click() --> sol click yapar
        cy.get('.next-1jphuq5').click()

        //8. contains('') --> locate almak için kullanılır, text içermesine göre locate alabiliriz.
        // contains('Email')
        //9. url() --> sayfanın url bize verecektir.

        cy.url().should('include','www.edu.goit.global')

        //10. title() --> sayfanın başlığını alır

        cy.title().should('include', 'Log in')
 



    })

})