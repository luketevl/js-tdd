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

  const database = sinon.mock(Database);
  database.expects('save').onde().withArgs(expectedUser);

  setupNewUser(info, function(){});
  database.verify();
  database.restore();
});
```


# Observations
- **Style Guide** is **very** important
-  **Husky**
  - _Only run_ in **changed** files
