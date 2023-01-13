it('Поиск в яндексе', ()=>{
    cy.visit('https://ya.ru/');
    cy.get('.CheckboxCaptcha-Button').click();
    cy.get('#text').type('Вакансии QA в Москве{Enter}');
    // cy.get('.search3__button').click();
})