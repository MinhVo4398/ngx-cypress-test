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

    it('second test', () => {
        cy.visit('/pages')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton')

        cy.contains('Sign in')

        cy.contains('[status="warning"]', 'Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

    });

    it('then and wrap method', () => {
        cy.visit('/pages')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // cypress style
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email') // chai assertion
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordSecondText)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })
        })

    })

    it('invoke command', () => {
        cy.visit('/pages')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2 
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal("Email address")
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain','check')
            .then(classValue => {
                expect(classValue).contain('checked')
            })
    })

    it.only('assert property',()=>{
        cy.visit('/pages')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then(input =>{
                cy.wrap(input).click()
                cy.get('nb-calendar-day-picker').contains('13').click()
                cy.wrap(input).invoke('prop','value').should('contain','Sep 13, 2023')
        })
    })



})
