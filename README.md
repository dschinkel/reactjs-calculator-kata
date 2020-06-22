# calculator-kata
 Thin slice of a Calculator done via Inside-Out TDD.
 - UI done in ReactJS
 
 **Thin Slice**: `Add` button on the calculator
 
 **To run**: `yarn start`
 
 **To test**: `yarn test`
 
 ### Notes
 - I chose to use JS Factories (classic JS Modules/Closure) instead of JS Classes for the functional logic (`src\domain`)
 - went with an inside-out TDD approach vs. an outside-in approach
    - either way is fine, just figured we'd try inside-out this time
- tried out the ava test framework this time instead of Jest, Mocha, etc.
- TODO: it does not handle adding decimal numbers yet, only integers
