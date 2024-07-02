describe ('UI elements handling',()=>{
    it('UI Elements valide and test',()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/",);
cy.get('#alertbtn').click()
cy.on('window:alert',(alerttxt)=>{
    expect(alerttxt).to.eq("Hello,share this practice page and share your knowledge")
})  
cy.get('#confirmbtn').click()
cy.on('window:confirm',(alerttxt)=>{
    expect(alerttxt).to.eq("Hello,Are you sure you want to confirm?")
    returnfalse;
})
    })
})