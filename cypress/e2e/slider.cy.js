describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Verify if each slide is being displayed correctly', function () {
    cy.visit('http://localhost:3000');

    // first slide
    cy.get('.card-description').should('contain.text', 'Rome');
    cy.get('.card-description').should('contain.text', 'Italy');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-next').should('not.be.disabled');
    cy.get('.swiper-button-next').click();
    cy.wait(500);

    // second slide
    cy.get('.card-description').should('contain.text', 'London');
    cy.get('.card-description').should('contain.text', 'United Kingdom');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-next').should('not.be.disabled');
    cy.get('.swiper-button-next').click();
    cy.wait(500);

    // third slide
    cy.get('.card-description').should('contain.text', 'Paris');
    cy.get('.card-description').should('contain.text', 'France');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-next').should('not.be.disabled');
    cy.get('.swiper-button-next').click();
    cy.wait(500);
  });
});