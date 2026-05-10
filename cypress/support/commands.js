Cypress.Commands.add('login', (email, password) => {

    cy.visit('https://www.edu.goit.global/account/login')

    cy.get('#user_email').clear().type(email)
    cy.get('#user_password').clear().type(password)

    cy.contains('button', 'Log in').click()

})