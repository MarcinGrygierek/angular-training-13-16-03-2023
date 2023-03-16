describe('Task manager', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:4200/tasks');
  })

  it('loads tasks list and checks if there is zero tasks on the list', () => {
    cy.get('[data-test-id="tasks-list"]').find('li').should('have.length', 0);
  })

  it('should add new task Lorem Ipsum', () => {
    const taskName = 'Lorem Ipsum';
    cy.get('#name').type(`${taskName}{enter}`);
    cy.get('[data-test-id="tasks-list"]').find('li').should('have.length', 1);
    cy.get('[data-test-id="tasks-list"]').find('li h2').first().should('have.text', taskName);
  })
})