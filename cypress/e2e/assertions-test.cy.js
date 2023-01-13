it('assertions test', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('be.visible') // кнопка видна, можно использовать вместо should and
        // .should('be.disable') если кнопка должна быть не активна
    expect(true).true.be.true // все утверждения должны быть верными
})