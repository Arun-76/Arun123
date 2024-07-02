class HomePage{
    visitingAmazon(){
        return cy.visit('https://www.amazon.in/')
   }
   verifyTitleOfHomePage(title){
    return cy.title().should('include',title)
   }
   findHelloSigninAndClickSignIn(){
    return cy.get('#nav-link-accountlink-nav-line-1').trigger('mouseover').then(()=>{
    cy.get('#nav-flyout-ya-signin a').eq(0).click()
   })
   }
   searchACategoryAndClick(){
   return cy.get('-nav-progressive-content a').each($categories)=>{
    if($categories.text().includes('Today')){
        cy.wrap($categories).click()
    }
   } 
   }
}
export default HomePage;