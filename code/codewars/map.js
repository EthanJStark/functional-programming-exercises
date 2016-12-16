// Creating map function, using reduce

const data = [ 1, 2, 3, 4 ]

const double = x => x * 2

let originalMap = data.map(double)

console.log('originalMap',originalMap)

const doubleAndPush = (a, b) => {
  const aa = [a]
  const bb = [b]
  console.log('a', a)
  return aa.concat(bb)
}

const ourMap = arr => arr.reduce( doubleAndPush )

const test = ourMap(data)

console.log('test',test)

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  // console.log('a: ',a)
  // console.log('b: ',b)
  return a.concat(b);
}, []);

console.log('flattened',flattened)
