// Cypress examples: https://github.com/cypress-io/cypress-example-recipes/tree/master/examples

import { localHostUrl } from "../support/constants";
import { formRegistrationTest } from "./demoTest/tests";

describe("All Tests", () => {
  it("does something", () => {
    cy.visit(localHostUrl); // <- 'cy' is not recognized
    cy.contains("User Registration Form");
  });

  formRegistrationTest();
});
