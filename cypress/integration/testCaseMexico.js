describe('verify test cases in the Mexican accounts wallet', ()=>{

    before(()=>{
        cy.visit('/login');
        cy.login('mex_account@gmail.com','Abc_153++.');
    });

    it('verify BTC wallet ', () => {

        cy.visit('/wallet');
        cy.fixture('wallet').then((wallet)=>{
            cy.get(wallet.labelCurrencies).contains('btc').click();

            cy.get(wallet.labelDepositBtc).click();

            //Assert to verify warning message
            cy.wait(500);
            cy.get(wallet.labelWarningMessage).should('contain','Oops! Something went wrong');

            cy.get('body').trigger('keydown', { keyCode: 27});
            cy.wait(500);
            cy.get('body').trigger('keyup', { keyCode: 27});
        })

    });

    it('navigate to beneficiaries to add one', ()=>{
        cy.visit('/r/user/beneficiaries/add');
        cy.fixture('beneficiaries').then((beneficiaries)=>{
            cy.get(beneficiaries.inputFirstName).type('First Name');
            cy.get(beneficiaries.inputLastName).type('LastName');
            cy.get(beneficiaries.inputSecondLastName).type('SecondLastName');
            cy.get(beneficiaries.inputDob).type('01/15/2000');
            cy.get(beneficiaries.divRelationShip).click().type('{downarrow}{enter}');
            cy.get(beneficiaries.inputPercentage).type('20');

            //click on add button
            cy.get(beneficiaries.buttonAdd).click();

            //assert
            cy.get(beneficiaries.modalConfirmBeneficiary).should('be.disabled');
        })

    });

})