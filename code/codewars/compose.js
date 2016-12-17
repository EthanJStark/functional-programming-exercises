/*
f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )
*/

const add3 = function(a){return a + 3}
const double = function(d){return d * 2}
const addTwoThings = (x, y) => x + y + 1000

//FIRST ANSWER, ONLY WORKS FOR DIADIC
// const compose = ( f, g ) => x => f( g( x ) )

//SECOND ANSWER, AMAZING, FAILING FOR SOME REASON
// const compose = (...args) => x => {
//   const props = [...args]
//   props.push(x)
//   props.reverse()
//   return props.reduce( ( a, b ) => b(a) )
// }

// var testprops [ [ 1, 2, 3, 4, 5 ], [Function: addall5], [Function: add1] ]

//THIRD ANSWER, PASSING ALL TESTS
const compose = (...args) => (...args2) => {
  const props = [...args]
  const props2 = [...args2]
  if(props.length === 0) {return (x => x).apply(this, props2)}
  console.log('props', props)
  props.push(props2)
  props.reverse()
  return props.reduce( ( a, b ) => {
    return (typeof(a) !== 'number') ? b.apply(this, a): b(a)
  })
}


let test = compose( double, addTwoThings )(3, 2)
let test2 = compose()(5)

console.log('test', test)
console.log('test2', test2)
