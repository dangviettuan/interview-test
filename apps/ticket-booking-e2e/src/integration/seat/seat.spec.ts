describe('ticket-booking: Seat component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=seat--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ticket-booking!');
  });
});
