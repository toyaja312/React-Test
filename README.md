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

1. **Fork this repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/growmeorganic/React-Test.git
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

**[📺 Project Setup & Testing Guide](./assets/Guide.mov)**

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

## 🔄 Contributing with Pull Requests

### Step 1: Create a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Example:
git checkout -b feature/add-email-validation-tests
```

### Step 2: Make Your Changes

1. Write your tests in the appropriate directory
2. Ensure all tests pass:
   ```bash
   npm run dev  # Keep server running
   npx cypress run  # Run all tests
   ```
3. Test your specific changes:
   ```bash
   npx cypress run --spec "path/to/your/test.cy.ts"
   ```

### Step 3: Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add email validation tests for user form"

# Push to your fork
git push origin feature/your-feature-name
```

### Step 4: Create a Pull Request

1. Go to your forked repository on GitHub
2. Click "New Pull Request"
3. Select your feature branch
4. Fill out the PR template:

**PR Title Format**: `feat: add email validation tests`

**PR Description Template**:

```markdown
## What this PR does

- Adds email validation tests for the user registration form
- Covers both valid and invalid email scenarios

## Testing

- [x] All existing tests pass
- [x] New tests pass locally
- [x] Tested with `npx cypress run`
```

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
5. **Submit** a clean pull request

### Success Criteria

- ✅ Tests follow existing patterns
- ✅ All tests pass in both interactive and headless modes
- ✅ Code is well-commented and readable
- ✅ PR includes proper description and testing notes

**Good luck! 🚀**
