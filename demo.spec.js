///// <reference types="cypress" />

describe('first test', function(){

    it('greeting', function(){

        cy.visit('https://lms.celt.vip/login')
        cy.get('#example-input-1').type('elgunulu@gmail.com')
        cy.get('#example-input-2').type('12345678')
        cy.get('.btn-primary').click()
        cy.url().should('eq','https://lms.celt.vip/')
        

        cy.get('span.menu-test').click()



    })
})

