# ts-singleton Decorator

This decorator let's you turn any class into a singleton.

## To install:

```
npm i ts-singleton
```

Then enable decorators in your tsconfig.json:

```
{
    "compilerOptions": {
        "target": "ES5", 
        "experimentalDecorators": true   
    }
}
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

