describe('Testes da Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve adicionar um contato', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('EBAC')
    cy.get('input[placeholder="E-mail"]').type('ebac@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('EBAC').should('be.visible')
  })

  it('Deve adicionar um segundo contato', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian Souza')
    cy.get('input[placeholder="E-mail"]').type('gian@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian Souza').should('be.visible')
  })

  it('Deve adicionar um terceiro contato', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian Souza 2')
    cy.get('input[placeholder="E-mail"]').type('gian@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian Souza 2').should('be.visible')
  })

  it('Deve editar um contato', () => {
    // Primeiro cria o contato que será editado
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('EBAC')
    cy.get('input[placeholder="E-mail"]').type('ebac@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('EBAC').should('be.visible')
    
    // Depois edita
    cy.contains('li', 'EBAC')
      .parents('.contato')
      .find('button.edit')
      .click()
    cy.get('input[placeholder="Nome"]').clear().type('EBAC - Escola Britânica de Artes Criativas e Tecnologia')
    cy.get('button.alterar').click()
    cy.contains('EBAC - Escola Britânica de Artes Criativas e Tecnologia').should('be.visible')
  })

  it('Deve remover um contato', () => {
    // Primeiro cria o contato que será removido
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian Souza 2')
    cy.get('input[placeholder="E-mail"]').type('gian2@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11987654321')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian Souza 2').should('be.visible')
    
    // Depois remove
    cy.contains('li', 'Gian Souza 2')
      .parents('.contato')
      .find('button.delete')
      .click()
    cy.contains('Gian Souza 2').should('not.exist')
  })
})