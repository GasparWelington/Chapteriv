///<reference types="cypress"/>
var Chance = require('chance');
var chance = new Chance();






// Mocha  - Test Runner

// describe, context, it


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        
        cy.visit('https://form-agilizei.netlify.app/')

        
        cy.get('input[name=firstName').type(chance.first())
        cy.get('input[name=lastName').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())
        cy.get('input[value=n]').check()

        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Livros')

        cy.get('select#countries').select('Dinamarca', {force: true})
        .should('have.value','Dinamarca')

        cy.get('select#years').select('2006', {force: true})
        .should('have.value','2006')

        cy.get('select#months ').select('Janeiro', {force: true})
        .should('have.value','Janeiro')
        cy.get('select#days').select('10', {force: true})
        .should('have.value','10')
        cy.get('input#firstpassword').type('Aluno@21')
        cy.get('input#secondpassword').type('Aluno@21')

        cy.get('button#submitbtn').click()


        //cy.url('https://form-agilizei.netlify.app/listagem.html')
        //.should('contain','listagem')

        



        

    });
});