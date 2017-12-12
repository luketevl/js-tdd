# Links
## Style Guides
- https://github.com/rwaldron/idiomatic.js/
- https://github.com/airbnb/javascript
- https://github.com/standard/standard

## Linter
- http://jscs.info/
- https://eslint.org/

## Editor
- http://editorconfig.org/

## Git Hook
### Husky
- https://github.com/typicode/husky
> Easy create githooks


## Code quality
- MacCall

## Why Test ?
- Help with
  - Refactor
  - Documentation
  - Best designer code, dummy
  - Quality

### TDD
> It is a simple and small automated test that check the behavior that a unique method
- Isolation between tests
  - Use before and after eachs
- Choose the best assert for that moment
- Use **mocks** for external calls


#### Flux
- Steps
  1 - Write a test that fails
  2 - Make the code work
  3 - Eliminate redundancy

![TDD FLUX](https://www.allaboutcircuits.com/uploads/articles/red-green-refactor.png)
- **Any** test to **ONE** method

#### THINKING TEST
- What the code will do ?
- What data it will receive?
- What the code will return ?
- What the do actions code will run ?

#### Pattern
> "It **should** do that **when this**"
```javascript
it('should return 4 when receive 2,2'{
  expect(sum(2,2)).to.equals(4);
})
```

#### SPIES
> Say whether the method was called, how many times, what arguments were passed, etc. Allows you to check if a method has been called within another method
- When use?
  - In test callbacks
```javascript
if('should inspect Jquery.getJSON usage of Jquery.ajax', function(){
  sinon.spy(jQuery, "ajax");
  jQuery.getJSON('/some/resource');
  assert(jQuery.ajax.calledOnce);
})
```
#### STUBS
> Equals **SPIES** **BUT** Except that they **override the target function**. It can even **change the behavior**, as well as the **values and exceptions** raised. 
- When use?
  - Jump part not necessary in code
  - Force exception
  - Simplify assync tests


#### MOCKS
>  Fakes methods(simitar to **spies** and **stubs**)
- When use?
  - Verify multiply behavior in specificy point
```javascript
if('should pass object with correct values to save only once', function(){
  const info = { name: 'test' };
  const expectedUser = { nameLowerCase: info.name.toLowerCase()};

  ct database = sinon.mock(Database);
  database.expects('save').onde().withArgs(expectedUser);

  setupNewUser(info, function(){});
  database.verify();
  database.restore();
});
```

## TOOLS
- https://mochajs.org/
  - **Simple** and **faster**
- http://chaijs.com/
  - Chai is a BDD / TDD **assertion** library
- https://istanbul.js.org/
  - Covarage
- http://sinonjs.org/
  - Using to create **spies**, **stubs** and **mocks**


# MOCHA
## WRITE TEST
- **Describe**, block of test.Summary about the test file
  - One  or n describes
```javascript
describe('nameClass', function(){});
describe('nameClass', function(){
  describe('Method1', function(){});
  describe('Method2', function(){});
});
```
- **Context**, define the _Case of test_
```javascript
describe('nameClass', function(){
  context('Case 1', function(){});
  context('Case 2', function(){});
});
```
- **IT**, run the test
```javascript
describe('nameClass', function(){
  context('Case 1', function(){
    it('should happen ...', function(){
      // What data it will receive?
      // What the code will return ?
    });
  });
});
```
## FUNCTIONS 
- **only**, run only that
```javascript
describe('nameClass', function(){
  context('Case 1', function(){});
  context('Case 2', function(){});
  context.only('Case 2', function(){});
});
```
- **skip**, skip that
```javascript
describe('nameClass', function(){
  context('Case 1', function(){});
  context('Case 2', function(){
    it.skip('should happen ...', function(){});
  });
  context.skip('Case 2', function(){});
});
```

## HOOKS
> Help duplicate code
- **Before**, run ONE X before the block
```javascript
describe('nameClass', function(){
  before(function(){

  });
});
```
- **After**, run ONE X after the block
```javascript
describe('nameClass', function(){
  after(function(){

  });
});
```

- **Before**, run ALL X before the block
```javascript
describe('nameClass', function(){
  beforeEach(function(){

  });
});
```
- **After**, run ALL X after the block
```javascript
describe('nameClass', function(){
  afterEach(function(){

  });
});
```


## REPORTER
- **RED** _broken_ test
- **GREEN**  _success_ test
- **BLUE**  _skiped_ test
- Run differente resport
```shell
mocha --reporter=nyan|dot|doc|html
```

## COMMAND LINE
- **BAIL**, **stop** in FIRST erro and die
```shell
mocha --bail
```

# CHAI
> Lib to asserts
- Interfaces
  - **Should**
  - **Assert**
  - **Expect**

- Import
```javascript
const expect = require('chai').expect;
```



# Observations
- **Style Guide** is **very** important
-  **Husky**
  - _Only run_ in **changed** files
- **Smoke test** be a more simple test( function exists, type of variables)