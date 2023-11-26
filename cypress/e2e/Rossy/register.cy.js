// Nama file: register.cy.js

describe('Register New Account', () => {
  it('Register New Account - Valid User', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Rossy')
    cy.get('#lastname').type('Nama belakang')
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Contohpassword123')
    cy.get ('#password-confirmation').type('Contohpassword123')
    cy.get('button.action.submit.primary').click()
    cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
    
  })
})

  it('Register New Account without First Name', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get('#lastname').type('Nama belakang')
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Contohpassword123')
    cy.get ('#password-confirmation').type('Contohpassword123')
    cy.get('button.action.submit.primary').click()
    cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
    
  })
})

  it('Register New Account without Last Name', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Rossy')
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Contohpassword123')
    cy.get ('#password-confirmation').type('Contohpassword123')
    cy.get('button.action.submit.primary').click()
    cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
    
  })
})

  it('Register New Account without Email', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Rossy')
    cy.get('#lastname').type('Nama belakang')
    cy.get('#password').type('Contohpassword123')
    cy.get ('#password-confirmation').type('Contohpassword123')
    cy.get('button.action.submit.primary').click()
    cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
    
  })
})

  it('Register New Account without Password & Confirm Password', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Rossy')
    cy.get('#lastname').type('Nama belakang')
    cy.get('#email_address').type(randomEmail)
    cy.get('button.action.submit.primary').click()
    cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
    
  })
})


  it.skip('Register New Account with Random Email', () => {
    cy.generateRandomEmail().then((randomEmail) => {
      cy.visit('https://magento.softwaretestingboard.com/'),
      cy.contains('Create an Account').click()
      cy.get('#firstname').type('Rossy')
      cy.get('#lastname').type('Nama belakang')
      cy.get('#email_address').type(randomEmail)
      cy.get('#password').type('Contohpassword123')
      cy.get ('#password-confirmation').type('Contohpassword123')
      cy.get('button.action.submit.primary').click()
      cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
    
    })
  })


})