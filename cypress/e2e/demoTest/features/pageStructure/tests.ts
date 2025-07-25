
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
    cy.contains("Next").should("be.visible").and("be.enabled");

    //entering first nad last name
    cy.get('#firstName').clear().type("John");
    cy.get('#lastName').clear().type("Doe");

    //entering phonenumber
    cy.get('#mobile').clear().type("9876549087");

    //entering password and confirming password
    cy.get('#password').type("T!tli@16");
    cy.get('#confirmPassword').type("T!tli@16");

    // selecting state
    cy.get('#state').select("Kerala");

    //clicking next

    cy.contains("Next").click();



  });
};

export const pageTwo = () => {
  it("should validate structure of page 2", () => {

    cy.contains("Address").should("be.visible");

    cy.contains("Page 2/2");

    cy.contains("Prev").should("be.visible").and("be.enabled");
    cy.contains("Submit").should("be.visible").and("be.enabled");

    cy.contains("Gender").should("be.visible");
    cy.contains("Male").should("be.visible");
    cy.contains("Female").should("be.visible");
    cy.contains("Other").should("be.visible");

    // seleting a radio button and filling address
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('#address').type("789 Ocean view");

    //Submitting the form
    cy.contains("Submit").click();


  });

};

