function reverseString(someString) {
    let newArr = someString.split('').reverse();
    someString = newArr.join('');
    return someString;
}
