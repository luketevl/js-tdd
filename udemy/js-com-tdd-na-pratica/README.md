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

# Promise
- Resolve all promises
```javascript
Promise.all([]);
```
- Return the first promisse in any romises
```javascript
Promise.race([]);
```

# Symbol
> This is new type, are **immutable** and **unique**

- **Creating** symbol

```javascript
const foo = Symbol('name');
const bar = Symbol('name');
foo == bar // return FALSE
```

- **Get** propertySymbols
```javascript
Object.getOwnPropertySymbol(obj);
```

# Iterators and Iterable
> Return `{value: any, done: boolean}`
> Element can be iterator
```javascript
const example = "example";
const it = example[Sysmbol.iterator]();
it.next();
```

# Generators
> Run function in steps
- **Creating** add * in function name 
  - **Yield** is **equal return** but is possible continue the function after the **yield** 
  - **Call** the interator use **.next()**
```javascript
function* getNames(){
  yield 'Lukete';
  yield 'Henrique';
}
const names = getNames();
names.next();
```

# Proxy
- **Creating** proxy
  - params: obj, handler
```javascript
const obj = {
  name: 'Lukete',
  age: 25
}
const proxy = new Proxy(obj, {
  get(target, name){
    console.log('Request name');
  },
  set(target, name, value){
    console.log('Request name');
  }
})
```

# SET
> Is iterables

- Use **size**
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.size;
```

- **Add** element _ignore equals values_
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.add('souza');
```

- **Delete** element
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.delete('henrique');
```

- **Verify if exists** element
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.has('henrique');
```

- **Get itarables** element
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.values();
```

# Observations
- **Style Guide** is **very** important
-  **Husky**
  - _Only run_ in **changed** files