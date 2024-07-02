describe ('UI elements handling',()=>{
  it('UI Elements valide and test',()=>{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/",);
//radio button
cy.get('[value="radio2"]').check().should('be.checked');
//Checkbox
cy.get('#checkBoxOption2').check().should('be.checked');
cy.wait(4000)
cy.get('#checkBoxOption2').check().should('not.be.checked');
cy.get('label input[type="checkbox"]').check(["option1","option3"]).should('be.checked')
})
})

     


