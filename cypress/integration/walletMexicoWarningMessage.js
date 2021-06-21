//const { before } = require("mocha");

describe('verify warning messages in the Mexican accounts wallet', ()=>{

    before(()=>{
        cy.visit('/login');
        cy.fixture('login').then((login)=>{
            cy.get(login.inputClientId).type('leonquiroz@gmail.com');
            cy.get(login.inputPassword).type('Julio_153');
            cy.get(login.buttonLogin).contains('Log in').click({force : true});
        })

        //cy.visit('https://devmalta.bitso.com/auth_device/4a2e4c2ea915dbaf2e44d2485ca4ef8f');
        //To do - assert after login

        //cy.visit('/wallet');
        //cy.get(wallet.labelCurrencies).contains('btc').click();
    })

    /*it('verify BTC wallet ', () => {
        cy.visit('/wallet');
        cy.get(wallet.labelCurrencies).contains('btc').click();
    });*/
})