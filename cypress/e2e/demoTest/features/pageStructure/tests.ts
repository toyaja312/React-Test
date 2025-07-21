// all tests caller function
export const pageStructure = () => {
  pageOne();
  pageTwo();
  pageThree();
};

// Tests
export const pageOne = () => {
  it("should validate structure of page 1", () => {
    cy.contains("First Name").should("be.visible");
    cy.get('input[placeholder="Enter first name"]').should("be.visible");

    cy.contains("Last Name").should("be.visible");
    cy.get('input[placeholder="Enter last name"]').should("be.visible");

    cy.contains("Page 1/3");

    cy.contains("Prev").should("be.visible").and("be.disabled");
    cy.contains("Next").should("be.visible").click();
  });
};

export const pageTwo = () => {
  it("should validate structure of page 2", () => {
    cy.contains("Address").should("be.visible");
    cy.contains("Country").should("be.visible");

    cy.contains("Select State").should("be.visible");
    cy.contains("Occupation").should("be.visible");

    cy.contains("Page 2/3");

    cy.contains("Prev").should("be.visible").and("be.enabled");
    cy.contains("Next").should("be.visible").click();
  });
};

export const pageThree = () => {
  it("should validate structure of page 3", () => {
    cy.contains("Upload Profile Picture").should("be.visible");
    cy.contains("Upload Resume").should("be.visible");
    cy.contains("Page 3/3");

    cy.contains("Prev").should("be.visible").and("be.enabled");
    cy.contains("Submit").should("be.visible").click();
  });
};
