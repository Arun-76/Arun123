describe('Login Page', () => {
    it('should log in successfully with correct credentials', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      cy.get('input[name=username]').type('student');
      cy.get('#password').eq(0).type("Password123")
      cy.get('.btn').click()
      cy.url().should('include',"practicetestautomation.com/logged-in-successfully/")
      cy.get('strong').should('have.text','Congratulations student. You successfully logged in!')
      cy.get('a[href*="https://practicetestautomation.com/practice"]').should('be.visible').click()
    })
  })

  
//incorrect login
cy.visit('https://practicetestautomation.com/practice-test-login/');
cy.get('input[name=username]').type('incorrectUser');
cy.get('#password').eq(0).type("Password123")
cy.get('.btn').click()

//Incorrect password
cy.visit('https://practicetestautomation.com/practice-test-login/');
cy.get('input[name=username]').type('student');
cy.get('#password').eq(0).type("Passw")
cy.get('.btn').click()
  

describe ("Basic UI elements handling",()=>{
  it('UI Elements valide and test',()=>{
cy.visit("https://rahulshettyacademy.com/Automation Practicel/");
})
})
