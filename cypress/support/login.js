Cypress.Commands.add('login',(email, password)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.inputClientId).type(email);
        cy.get(login.inputPassword).type(password);
        cy.get(login.buttonLogin).contains('Log in').click({force : true});
    })
})