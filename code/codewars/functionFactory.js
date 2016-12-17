const factory = x => arr => arr.map( y => x * y)

let fives = factory(5)
var myArray = [1, 2, 3];
let test = fives(myArray);
console.log('test',test)
