//// <reference type = "cypress" />
describe("Our first suite", () => {

 
    it("first test", () => {
        cy.visit('/pages')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by Tag Name
        cy.get('input')

        //By ID
        cy.get("#inputEmail1")

        // By Class name
        cy.get(".input-full-width")

        // By Attribute name
        cy.get('[placeholder]')

        // By Attribute name and value
        cy.get('[placeholder="Email"]')

        // By class value -must provide the entire value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //By Tagname and Attribute with value
        cy.get('input[placeholder="Email"]')

        //By two different attribute
        cy.get('[placeholder="Email"][type="email"]')

        // By Tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // The most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')


    })

    

})
