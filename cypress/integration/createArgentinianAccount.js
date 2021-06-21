describe('create an Argentinian account', ()=>{
    it('create an account for Argentina', () => {
        cy.visit('/register');
        cy.fixture('register').then((register)=>{

            cy.get(register.textCountrySelected).type('Argentina{enter}');

            cy.get(register.inputEmail).type('asdlkj@gmail.com');
            cy.get(register.inputPassword).type('Abc_153++.');
            cy.get(register.inputPasswordConfirmation).type('Abc_153++.');
            
            cy.get(register.labelAcceptTerms).click({force : true});
            cy.get(register.labelAcceptMail).click({force : true});
            cy.get(register.labelAcceptPrivacy).click({force : true});

            cy.get('button > span').contains("Start").click({force:true});
        })        
    });
})