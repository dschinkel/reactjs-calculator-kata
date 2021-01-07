# reactjs-calculator-kata
 Thin slice of a Calculator done via Inside-Out TDD.
 Uses React Hooks as well as EnzymeJS.
 
 - UI done in ReactJS
 
 **Thin Slice**: `Add` Operation
 - note that at this juncture, it does not yet handle decimal addition (todo later)
 
 **To run**: 
 - first, ensure you're using **node 12 or better**
    - You can use [nvm](https://github.com/nvm-sh/nvm) to change node versions very easily with the `npm use <nodversion>`
 - `yarn` - once, to initially install node-modules
 - `yarn start` - should open a browser and run the calculator

 **To test**: `yarn test`
 
 ### Notes on Approach / Choices
 - I chose to use JS Factories (classic JS Modules/Closure) instead of JS Classes for creating object instances for the functional core (domain) logic in  `src\domain`
 - went with an inside-out TDD approach vs. an outside-in approach
    - either way is fine, just figured we'd try inside-out this time
- tried out the [Ava](https://github.com/avajs/ava) test framework this time instead of Jest, Mocha, etc
- Stuff I want to do later: Add TypeScript
