import HomePage from "--/PAGEOBJECTS/amzhome";
import Category from "--/PAGEOBJECTS/todaysdeals";
import Signin from "--/PAGEOBJECTS/Signin";
describe('Implementing Page Object Model',()=>{
    let amazonData;
    let homepage=new HomePage()
    let Category=new Category()
    let Signinpage=new Signin()
    before(()=>{
        cy.fixture('amdata').than((amz)=>{
            amazonData-amz
        })
    })
    it('Automate Amazon',()=>{
        homepage.visitingAmazon()
        homepage.VerifyTitleOFHomePage(amazonData.pageTitle)
        homepage.findHelloSigninAndClickSignIn()
        Signinpage.afterSigninGoBackToHome()
        homepage.searchACategoryAndClick()
        Category.verifyTitleOFCategoryPage()
        Category.goBackToHome()
        cy.get('#twotabsearchtextbox').type(amazonData.phone)
        cy.get('#twotabsearchtextbox').type('{enter}')
    })
})