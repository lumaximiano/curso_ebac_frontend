describe('Testes da Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve adicionar 3 contatos', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('EBAC')
    cy.get('input[placeholder="E-mail"]').type('ebac@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('EBAC').should('be.visible')


    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian Souza')
    cy.get('input[placeholder="E-mail"]').type('gian@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian Souza').should('be.visible')


    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian Souza 2')
    cy.get('input[placeholder="E-mail"]').type('gian@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian Souza 2').should('be.visible')
  })

  it('Deve editar o contato EBAC', () => {
    cy.contains('li', 'EBAC')
      .parents('.contato')
      .find('button.edit')
      .click()
    cy.get('input[placeholder="Nome"]').clear().type('EBAC - Escola Britânica de Artes Criativas e Tecnologia')
    cy.get('button.alterar').click()
    cy.contains('EBAC - Escola Britânica de Artes Criativas e Tecnologia').should('be.visible')
  })

  it('Deve remover o contato Gian Souza 2', () => {
    cy.contains('li', 'Gian Souza 2')
      .parents('.contato')
      .find('button.delete')
      .click()
    cy.contains('Gian Souza 2').should('not.exist')
  })
})