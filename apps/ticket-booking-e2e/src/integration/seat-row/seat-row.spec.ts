describe('ticket-booking: SeatRow component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=seatrow--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ticket-booking!');
    });
});
