# ts-singleton Decorator

This decorator let's you turn any class into a singleton.

To install:

```
npm i ts-singleton
```

## Usage

```
@singleton
class Dummy{
    date
    constructor(){
        this.date = Date.now()
    }
}
const dummy = new Dummy()
const dummy2 = new Dummy()
console.log(dummy.date === dummy2.date)
// -> true
```

For more information on rationale, usage and wha't happening under the hood, read:

_https://medium.com/@patrick.assoa.adou/elegant-typescript-data-validation-with-decorators-68ec7506fd87_
