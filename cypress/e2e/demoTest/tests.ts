import { localHostUrl } from "../../support/constants";
import { pageStructure } from "./features/pageStructure/tests";
import { validationTests } from "./features/testValidation/tests";

export const formRegistrationTest = () => {
  it("It should Validate user form", () => {
    // visit base url
    cy.visit(localHostUrl);

    // Verify Page title
    cy.contains("User Registration Form").should("be.visible");
  });
  pageStructure();
  validationTests();
};
