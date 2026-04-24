describe('Testes da Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um contato', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('EBAC')
    cy.get('input[placeholder="E-mail"]').type('ebac@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('EBAC').should('be.visible')
  })

  it('Deve editar um contato', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian')
    cy.get('input[placeholder="E-mail"]').type('gian@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian').should('be.visible')

    cy.contains('li', 'Gian')
      .parents('.contato')
      .find('button.edit')
      .click()
    cy.get('input[placeholder="Nome"]').clear().type('Gian Souza Editado')
    cy.get('button.alterar').click()
    cy.contains('Gian Souza Editado').should('be.visible')
  })

  it('Deve remover um contato', () => {
    cy.contains('button', 'Adicionar').click()
    cy.get('input[placeholder="Nome"]').type('Gian2')
    cy.get('input[placeholder="E-mail"]').type('gian2@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11987654321')
    cy.contains('button', 'Adicionar').click()
    cy.contains('Gian2').should('be.visible')

    cy.contains('li', 'Gian2')
      .parents('.contato')
      .find('button.delete')
      .click()

    cy.reload()
    cy.contains('Gian2').should('not.exist')
  })
})