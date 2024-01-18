# Mystery Function

What does the `mystery()` function in the following piece of code do? Add your
answer to this markdown file.

```javascript
function mystery(a) {
    if(a.length == 1) return a[0];
    var foo = mystery(a.slice(1, a.length))
    if(foo > a[0]) return foo;
    else return a[0];
}
```

NOTE: I referenced the following source to learn more about how the .slice function works: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

The mystery function is a recursive function that seemingly accepts any data type that .slice will work on (at least strings & arrays).

I will break the functionality of mystery down into ordered steps:

1.) Mystery determines whether the length of the input variable "a" is exactly 1 or not
        a.) If the length of a is equal to 1, it returns the 0th (or first) element of "a"
        b.) Otherwise, mystery declares a variable "foo" that is defined as a shallow copy of "a" that excludes the
            last of element in "a" because the end argument (which is a.length) of the.slice function is exclusive.
        c.) The value of "foo" is passed back into mystery function, hence my earlier claim that mystery is recursively
            defined. Each iteration will result in "a" being exactly one element smaller, and step 1a above is the only
            way to break out of the loop.
2.) Next, mystery compares "foo" to the 0th (or first) element of "a" and determines whether "foo" is greater 
    than "a." If the contents of each variable are letters/symbols, it seemingly uses their corresponding ASCII code(s),
    and if they're numerical it will simply compare the value of the number(s). 
        a.) If the value of "foo" is greater than the value of the 0th (or first) element of "a" mystery will return
            the value of "foo."
        b.) Otherwise, mystery will return the value of the 0th (or first) element of "a."
3.) Mystery will repeat steps 1 and 2 until the length of "a" is precisely one, or it only has a 0th element.
        a.) In doing so, the ultimate output value of mystery will always be the initial element of "a" that holds
            the greatest value (value either being a letter/symbol's ASCII code, or a numerical value).