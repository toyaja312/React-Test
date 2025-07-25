// all tests caller function
export const validationTests = () => {
  validatePageOne();
  validatePageTwo();
  validatePageThree();
};

//Write your test cases in the following functions
// Each function should contain test cases for a specific page's validation
export const validatePageOne = () => {
  it("should show error if firstName and lastName have less than 3 characters", () => {

    //Enter less than 3 characters in firstname and lastname 
    cy.get('#firstName').clear().type('Al');
    cy.get('#lastName').clear().type('Bo');

    cy.contains('Name must be 3 character and must be alphabet').should('be.visible');
    cy.contains('Name must be 3 character and must be alphabet').should('be.visible');

    //Enter non-alphabetic characters in firstnamd and lastname
    cy.get('#firstName').clear().type('1123');
    cy.get('#lastName').clear().type('456');

    cy.contains('Name must be 3 character and must be alphabet').should('be.visible');
    cy.contains('Name must be 3 character and must be alphabet').should('be.visible');

    //Enter more than 3 alphabetic characters  
    cy.get('#firstName').clear().type('Jane');
    cy.get('#lastName').clear().type('Smith');

    cy.contains('Name must be 3 character and must be alphabet').should('not.be.visible');
  });

  it("should show error if the mobile number donot start with 6-9 ", () => {

    // Enter an invalid phone number (starts with 1)
    cy.get('#mobile').clear().type('1234567890');

    // Assert the error message is shown
    cy.contains('Phone number must be Indian 10-digit number starting with 6-9').should('be.visible');

    // Enter an invalid phone number (only 5 digits)
    cy.get('#mobile').clear().type('98765');
    cy.contains('Phone number must be Indian 10-digit number starting with 6-9').should('be.visible');

    // Enter a valid phone number (starts with 9 and has 10 digits)
    cy.get('#mobile').clear().type('9876543210');
    cy.contains('Phone number must be Indian 10-digit number starting with 6-9').should('not.be.visible');

  });

  it("should show error if the password donot contain 6-20 char, letters ,numbers and special symbol ", () => {

    //less than 6 characters
    cy.get('#password').clear().type('A@1');
    cy.contains('6-20 char, letters ,numbers and special symbol').should('be.visible');

    //Missing a special character
    cy.get('#password').clear().type('Abcd1234');
    cy.contains('6-20 char, letters ,numbers and special symbol').should('be.visible');

    //Number is missing
    cy.get('#password').clear().type('Abcd@efg');
    cy.contains('6-20 char, letters ,numbers and special symbol').should('be.visible');

    //Missing Letter
    cy.get('#password').clear().type('1234@5678');
    cy.contains('6-20 char, letters ,numbers and special symbol').should('be.visible');

    //Valid password
    cy.get('#password').clear().type('T!tli@16');
    cy.contains('6-20 char, letters ,numbers and special symbol').should('not.be.visible');


  });
  it("should show error if the password donot contain 6-20 char, letters ,numbers and special symbol ", () => {

    //Passwords donot match
    cy.get('#password').clear().type('Abcd@123');
    cy.get('#confirmPassword').clear().type('Abcd123');
    cy.contains('Password Does not match').should('be.visible');

    //Password match
    cy.get('#password').clear().type('Abcd@123');
    cy.get('#confirmPassword').clear().type('Abcd@123');
    cy.contains('Password Does not match').should('not.be.visible');


  });



};

export const validatePageTwo = () => {
  it("should show error if address contains less than 5 characters", () => {
    cy.contains("Next").click();

    //invalid address
    cy.get('#address').clear().type('Ta');
    cy.contains('Must me 5 character long').should('be.visible');

    //valid address
    cy.get('#address').clear().type('Tamilnadu');
    cy.contains('Must me 5 character long').should('not.be.visible');



  });

};

export const validatePageThree = () => {
  it("should show error if any of the fields is not filled", () => {

    cy.contains("Prev").click();

    //All the fields are empty
    cy.get('#firstName').clear();
    cy.get('#lastName').clear();
    cy.get('#mobile').clear();
    cy.get('#password').clear();
    cy.get('#confirmPassword').clear();
    cy.contains("Next").click();
    cy.get('#address').clear();
    cy.contains("Submit").click();

    cy.contains('p', 'Please Fill all fields').should('be.visible');

    cy.contains('span','X').click();
    cy.contains("Prev").click();

    //All the fields are filled
    cy.get('#firstName').clear().type("John");
    cy.get('#lastName').clear().type("Doe");
    cy.get('#mobile').clear().type("9876549087");
    cy.get('#password').type("T!tli@16");
    cy.get('#confirmPassword').type("T!tli@16");
    cy.get('#state').select("Kerala");
    cy.contains("Next").click();
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('#address').type("789 Ocean view");
    cy.contains("Submit").click();

    cy.contains('p','Form submitted successfully').should('be.visible');


  });
};
