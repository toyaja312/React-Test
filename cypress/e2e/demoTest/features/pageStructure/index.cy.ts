import { localHostUrl } from "../../../../support/constants";
import { pageStructure } from "./tests";

describe("Page structure tests", () => {
  before(() => {
    cy.visit(localHostUrl);
  });

  pageStructure();
});
