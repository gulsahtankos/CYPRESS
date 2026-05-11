describe("Standart Test Yazman", () =>{

    it("tc01_Standart Test", () => {

        //1. url git
        //2. Title'ın görünür olup olmadığını kontrol et ve text'in Login olup olmadığını kontrol et.
        //3. Email alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et.
        //4. Password alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et.
        //5. Login butonunun görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et.
        //6. I can't remember the password alanının görünür olup olmadığını kontrol et ve textin I can't remember the password

        cy.visit("https://www.edu.goit.global/account/login");

        cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login");

        cy.get('#user_email').should("be.visible").and("exist");

        cy.get('#user_password').should("be.visible").and("exist");

        cy.get('.next-1jphuq5').should("be.visible").and("exist");

        cy.get('.next-1v2ri13 > .next-mtc523').should("be.visible").and("have.text","I can't remember the password");

    });

});