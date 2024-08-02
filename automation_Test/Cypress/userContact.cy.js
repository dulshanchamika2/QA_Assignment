///<reference types  ="cypress"/>

it('Book Store',() => {
      cy.visit('http://localhost/project/login.php')
      cy.get('[type="email"]').type('chamika@gmail.com')
      cy.get('[type="password"]').type('12345')
      cy.get('.btn').click()
      cy.get('.navbar > [href="contact.php"]').click()
      cy.get('[type="text"]').type('lalithya')
      cy.get('[type="email"]').type('lalithya@gmail.com')
      cy.get('[type="number"]').type('0876543216')
      cy.get('textarea.box').type('"Your descriptin goes here.........."')
      cy.get('.btn').click()
})