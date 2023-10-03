describe("copy input", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    // Selected input and type
    cy.wait(1000);
    cy.get("#input-desktop").type("Ninh Dang Pham!");

    // Selected btn copy and click
    cy.wait(2000);
    cy.get("#button-copy").focus().click();

    // Result
    cy.get("#success").should("be.visible");
  });
});
