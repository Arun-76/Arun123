describe ('UI elements handling',()=>{
    it('UI Elements valide and test',()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/",);
cy.get('#displayed.text').should('be.visible');
cy.get('#hide-textbox').click();
cy.get('#displayed.txt').should('not.be.visible');
cy.get('table tbody tr td:nth-child(2)').each(($cells)=>{
    if($cells.text().includes('Appium'){
        cy.wrap($cells).then((tdcontent)=>{
            const tdCont=tdContent.text()
            cy.log(tdcont)
        })
    })
})
    })
})