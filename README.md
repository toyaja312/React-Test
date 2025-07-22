# 🧾 User Registration Form with Cypress Tests

This project is a **User Registration Form** built using React, designed to collect user details like name, mobile number, password, address, and more.

Cypress is used to test the form's functionality — ensuring everything from input validation to form submission works correctly.

---

## 🚀 Getting Started

Welcome! This guide will help you set up the project, understand the codebase, write tests, and contribute via pull requests.

### Prerequisites

- Node.js (v16 or higher)
- Git
- A code editor (VS Code recommended)

---

## 📋 Setup Instructions

### 1. Fork and Clone the Repository

1. **Fork this repository** to your GitHub account by clicking the "Fork" button at the top right of this page
2. **Clone your forked repository** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/React-Test.git
   cd React-Test
   ```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**⚠️ Important**: Keep this server running while working with Cypress tests!

---

## 🧪 Working with Cypress Tests

### Understanding the Test Structure

Our Cypress tests are organized in the following structure:

```
cypress/
├── e2e/
│   ├── allTests.cy.ts           # Main test suite
│   └── demoTest/
│       ├── features/
│       │   └── pageStructure/   # 📚 Reference tests (START HERE!)
│       │       ├── index.cy.ts  # Test runner
│       │       └── tests.ts     # Test implementations
│       └── tests.ts
└── support/
    ├── constants.ts             # Test constants
    └── commands.ts              # Custom Cypress commands
```

### Running Cypress Tests

#### Option 1: Interactive Mode (Recommended for Development)

```bash
npx cypress open
```

This opens the Cypress Test Runner where you can:

- See tests run in real-time
- Debug issues step by step
- Inspect DOM elements

#### Option 2: Headless Mode (For CI/CD)

```bash
npx cypress run
```

#### Option 3: Run Specific Test Files

```bash
# Run a specific test file
npx cypress run --spec "cypress/e2e/demoTest/features/pageStructure/index.cy.ts"
```

### 📹 Video Guide

For a visual walkthrough of the project setup and Cypress testing workflow, watch our comprehensive guide:

**[📺 Project Setup & Testing Guide](https://www.loom.com/share/b5a17884a3a643b294aeb673f450ab19?sid=380af376-bc40-4f4d-a016-9c2f1105b26a)**

This video covers:

- Running the development server
- Guide how to test your test cases (Cypress Test Runner)

### 📚 Learning from Example Tests

**Start by examining**: `cypress/e2e/demoTest/features/pageStructure/`

This folder contains well-documented test examples that demonstrate:

- ✅ Page structure validation
- ✅ Element visibility checks
- ✅ Form navigation testing
- ✅ Button state validation

**Key learning points:**

```typescript
// Example from pageStructure/tests.ts
export const pageOne = () => {
  it("should validate structure of page 1", () => {
    cy.contains("First Name").should("be.visible");
    cy.get('input[placeholder="Enter first name"]').should("be.visible");
    // ... more assertions
  });
};
```

---

## 📖 Cypress Learning Resources

- **Official Cypress Documentation**: https://docs.cypress.io/
- **Best Practices**: https://docs.cypress.io/guides/references/best-practices
- **API Reference**: https://docs.cypress.io/api/table-of-contents
- **Example Recipes**: https://github.com/cypress-io/cypress-example-recipes

### Useful Cypress Commands to Know

```javascript
// Navigation
cy.visit("/path");

// Element Selection
cy.get('[data-testid="submit-btn"]');
cy.contains("Submit");

// Interactions
cy.click();
cy.type("text");
cy.select("option");

// Assertions
cy.should("be.visible");
cy.should("contain", "text");
cy.should("have.value", "expected");
```

---

### Step 5: Share Your Work

Once you make changes your forked project:

2. **Share the link** to your forked repository with the project maintainers
3. **Ensure all tests pass** and your code follows the established patterns

---

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to connect to server"**

   - Ensure `npm run dev` is running
   - Check that `http://localhost:5173` is accessible

2. **Tests timeout**

   - Check if elements exist on the page
   - Verify selectors are correct
   - Ensure proper wait conditions

3. **Module import errors**
   - Check file paths in import statements
   - Ensure all required files exist

### Getting Help

- Check existing test examples in `demoTest/features/pageStructure/`
- Read Cypress documentation
- Review similar test patterns in the codebase

---

## 🎯 Assignment Guidelines

### Your Task

1. **Study** the existing test structure in `pageStructure/`
2. **Create** new test suites for different form features in `testValidation/`
3. **Follow** the established patterns and naming conventions
4. **Ensure** all tests are well-documented and pass
5. **Submit** your work by sharing your forked repository

### Success Criteria

- ✅ Tests follow existing patterns
- ✅ All tests pass in both interactive and headless modes
- ✅ Code is well-commented and readable
- ✅ Fork contains proper commit history and PR documentation
- ✅ Repository link shared with maintainers for review

**Good luck! 🚀**
