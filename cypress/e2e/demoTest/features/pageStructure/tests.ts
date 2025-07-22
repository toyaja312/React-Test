
// all tests caller function
export const pageStructure = () => {
  pageOne();
  pageTwo();
};

// Tests
export const pageOne = () => {
  it("should validate structure of page 1", () => {
    cy.contains("First Name").should("be.visible");
    cy.get('input[placeholder="Enter first name"]').should("be.visible");

    cy.contains("Last Name").should("be.visible");
    cy.get('input[placeholder="Enter last name"]').should("be.visible");

    cy.contains("Select State").should("be.visible");

    cy.contains("Page 1/2");

    cy.contains("Prev").should("be.visible").and("be.disabled");
    cy.contains("Next").should("be.visible").click();
  });
};

export const pageTwo = () => {
  it("should validate structure of page 2", () => {
    cy.contains("Address").should("be.visible");

    cy.contains("Page 2/2");

    cy.contains("Prev").should("be.visible").and("be.enabled");
    cy.contains("Submit").should("be.visible").click();

  });
};
