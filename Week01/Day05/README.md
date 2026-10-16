**Date:** 16 October 2026

**Today's objective:**  
To understand JavaScript Modules, including Export, Import, and Namespace Objects, and learn how to organize and reuse code across multiple files.

**What I completed:**

1. Learned the purpose of JavaScript Modules and how they help organize code into separate files.
2. Practiced Named Exports and Imports using `export` and `import`.
3. Learned Default Export and understood the difference between Named and Default Exports.
4. Practiced Namespace Imports using `import * as students` to access multiple exported variables and functions through an object.
5. Created and practiced two JavaScript files, `export.js` and `import.js`, inside the `Day05` folder.
6. Learned how to access exported variables and functions through a namespace object, such as `students.studentName` and `students.calculateResult()`.
7. Understood the execution order of imported modules and why top-level code in an imported module executes before the importing module's top-level code.
8. Practiced identifying and fixing errors related to namespace object names and function calls.

**Technical concepts understood:**

- Modules allow JavaScript code to be divided into reusable and maintainable files.
- `export` makes variables, functions, and classes available to other modules.
- `import` allows us to use exported items from another module.
- Named Exports allow multiple items to be exported by name.
- Default Export provides a module's default exported item.
- Namespace Import (`import * as`) groups named exports under one object for convenient access.
- Static imports are processed before the importing module's top-level code executes.
- In Node.js, ES Modules can be enabled through `"type": "module"` in `package.json`.

**Problem / blocker:**

- Needed practice correcting errors when accessing exported functions through a namespace object.
- Needed to understand why imported module code executes before the importing file's other top-level statements.
- More practical coding exercises are required to strengthen understanding of JavaScript Modules.

**Tomorrow's first task:**

Practice JavaScript Modules with real-world examples, revise Rest and Spread Operators, and begin learning Asynchronous JavaScript basics, InshaAllah.