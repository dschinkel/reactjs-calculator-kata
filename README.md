# calculator-kata
 Thin slice of a Calculator done via Inside-Out TDD.
 - UI done in ReactJS
 
 **Thin Slice**: `Add` Operation
 - note that at this juncture, it does not yet handle decimal addition (todo later)
 
 **To run**: `yarn start`

 **To test**: `yarn test`
 
 ### Notes
 - I chose to use JS Factories (classic JS Modules/Closure) instead of JS Classes for creating object instances for the functional core (domain) logic in  `src\domain`
 - went with an inside-out TDD approach vs. an outside-in approach
    - either way is fine, just figured we'd try inside-out this time
- tried out the [Ava](https://github.com/avajs/ava) test framework this time instead of Jest, Mocha, etc.
