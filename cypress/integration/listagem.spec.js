///<reference types="cypress"/>

describe('Listagem', () => {
    it('Quando não houver cadastro, então a listagem devem estar vazia', () => {

        cy.fixture('listagem-vazia').then(data =>{
            window.localStorage.setItem('data', JSON.stringify (data))
            cy.get('table tbody tr')
            .should('have.length',0)

        })

        
    });

    it('Quando houver um ou mais cadastro, então a listagem devem exibir cada registro',()=>{
        cy.fixture('listagem-com-itens').then(data =>{
            window.localStorage.setItem('data', JSON.stringify (data))

        })
        
        
        
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr')
        .should('have.length',1)

        

    })
});