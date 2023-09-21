describe("Invoke", () => {
    it("invokes the slice method on an array", () => {
      cy.request("https://jsonplaceholder.typicode.com/posts")
        .its("body")
        .invoke("slice", 0, 5)
        .its("length")
        .should("eq", 5);
    });
  
    it("the nav dropdown toggles the aria-expanded property when opened or closed", () => {
      cy.visit("https://learn.cypress.io/");
  
      cy.get("[data-test='courses-dropdown']")
        .invoke("attr", "aria-expanded")
        .should("eq", "false");
  
      cy.get("[data-test='courses-dropdown']")
        .click()
        .invoke("attr", "aria-expanded")
        .should("eq", "true");
    });
  
    it("hides an element using jQuery's .hide()", () => {
      cy.visit("https://learn.cypress.io/");
  
      cy.get("#courses").invoke("hide").should("not.be.visible");
    });
  });