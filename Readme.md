
# Playwright Installation Guide

## Prerequisites
1. **Node.js**: Ensure Node.js is installed on your system. You can download it from the [official website](https://nodejs.org/).
2. **Visual Studio Code (VS Code) Editor**: Install VS Code for an optimal development environment. Download it from the [official website](https://code.visualstudio.com/).

## Installation Steps

### 1. Create Project Folder
- Create a new project folder and open it in VS Code.

### 2. Install Playwright via Terminal
- Open the terminal in VS Code (use `Ctrl + \`` (backtick) or navigate to `Terminal > New Terminal`).
- Run the following command to initialize Playwright:
  ```bash
  npm init playwright@latest
  ```
- This command will set up a new Node.js project with Playwright. It will generate the following files and directories:
  - `package.json`: Node project management file.
  - `playwright.config.js`: Playwright configuration file.
  - `tests`: Directory to store all Playwright tests.

- To verify the installed version of Playwright, run:
  ```bash
  npx playwright -v
  ```

### 3. Install Playwright via VS Code Extension
- Open the Extensions view in VS Code (use `Ctrl + Shift + X` or navigate to `View > Extensions`).
- Search for the "Playwright" extension and install it.

## Running Playwright Tests

### Execute Tests
- To run all tests, use the following command:
  ```bash
  npx playwright test
  ```
  Runs the end-to-end tests.

- To start the interactive UI mode, use:
  ```bash
  npx playwright test --ui
  ```

- To run the tests only on Desktop Chrome, use:
  ```bash
  npx playwright test --project=chromium
  ```

- To run the tests in a specific file, use:
  ```bash
  npx playwright test example
  ```

- To run the tests in debug mode, use:
  ```bash
  npx playwright test --debug
  ```

- To auto-generate tests with Codegen, use:
  ```bash
  npx playwright codegen
  ```

## Generating HTML Report

### View HTML Report
- After running your tests, generate and view the HTML report with:
  ```bash
  npx playwright show-report
  ```

## Suggested Steps to Begin

We suggest that you begin by typing:

```bash
npx playwright test
```

And check out the following files:
- `tests/example.spec.js`: Example end-to-end test
- `tests-examples/demo-todo-app.spec.js`: Demo Todo App end-to-end tests
- `playwright.config.js`: Playwright Test configuration


## Create a new Test file using javascript
1. In the Test folder create a file test file ending with `spec.js` example `mytest.spec.js`