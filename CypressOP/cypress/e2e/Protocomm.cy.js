describe('Fill details using fixture data', () => {
    let cred;
    before(()=> {
        cy.fixture('userData').then((user) => {
            cred=user
        })
    })
})

it('should fill the form using fixture data', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(':nth-child(1) > .form-control').type(cred.name);
    cy.get('#exampleInputPassward1').type(cred.email);
    cy.get('#exampleCheck1').check();
    cy.get('select').select(cred.gender);
    cy.get('input[name="bday"]').type(cred.dob);
    cy.get('#inlineRadio2').click
    cy.get('input[type="submit"]').click();
//cy.get('div.alert alert-success alert-dismissible').should('have.text','Success! The Form has been submitted successfully!.')
cy.get('a[class="nav-link"]').eq(1).click()
Collect.ProductsToAdd.forEach((mobiles)=>{
    cy.addingproductToCart(mobiles)
})

cy.wait(3000)
cy.get('a[class="nav-link btn btn-primary"]').click()
cy.get('button[class="btn btn-success"]').click()
cy.get('input[id="country"]').type("India")
cy.wait(4000)
cy.contains("India").click()
cy.get('#checkbox2').click( {force: true})
cy.get('input[class="btn btn-success btn-lg"]').click()
cy.wait(4000)
cy.get('alert alert-success alert-dismissible').should('have.text','')
})

