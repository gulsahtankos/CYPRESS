describe("Standart Test Yazman", () => {

    it("tc01 Standart Test", () => {

        //1. Url gir
        cy.visit("https://www.edu.goit.global/account/login");

        //2. Title'ın görünür olup olmadığını kontrol et ve text'in Login olup olmadığını kontrol et.
        cy.get('.next-10stgr7 > .next-c1vj7d')
          .should("be.visible")
          .and("have.text", "Login");

        //3. Email alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et.
        cy.get('[name="email"]')
          .should("be.visible")
          .and("exist");

        //4. Password alanının görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et.
        cy.get('[name="password"]')
          .should("be.visible")
          .and("exist");

        //5. Login butonunun görünür olup olmadığını kontrol et ve var olup olmadığını kontrol et.
        cy.get('.eckniwg2')
          .should("be.visible")
          .and("exist");

        //6. I can't remember the password alanlarının görünür olup olmadığını kontrol et ve text'in I can't remember the password olduğunu kontrol et.
        cy.get('.next-1v2ri13 > .next-mtc523')
          .should("be.visible")
          .and("have.text", "I can't remember the password");

    });

});