import { localHostUrl } from "../../../../support/constants";
import { validationTests } from "./tests";

describe("Validate Input field", () => {
  before(() => {
      cy.visit(localHostUrl);
    });
  validationTests();
});
