///<reference types  ="cypress"/>

it('Should display a success message after form submission',() => {
      cy.visit('http://localhost/project/login.php')

      cy.get('a').click()
      cy.get('[type="text"]').type('Chamika')
      cy.get('[type="email"]').type('chamika@gmail.com')
      cy.get('[name="password"]').type('12345')
      cy.get('[name="cpassword"]').type('12345')
      cy.get('select.box').select('user')
      cy.get('.btn').click()
      cy.get('a').click()
      cy.get('[type="email"]').type('chamika@gmail.com')
      cy.get('[type="password"]').type('12345')
      cy.get('.btn').click()
  })