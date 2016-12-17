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

//SavePoint
//
// const compose = (...args) => (...args2) => {
//   const props = [...args]
//   const props2 = [...args2]
//   props.push(props2)
//   props.reverse()
//   console.log('props',props)
//   return props.reduce( ( a, b ) => {
//     console.log('a',a)
//     console.log('b',b)
//
//     return b(a[0])} )
// }

const compose = (...args) => (...args2) => {
  const props = [...args]
  const props2 = [...args2]
  props.reverse()
  let tester = addTwoThings(props2)
  console.log('tester',tester)
  console.log('props',props)
  return props.reduce( ( a, b ) => {
    console.log('a',a)
    console.log('b',b)

    return b(a[0])} )
}


let test = compose( double, addTwoThings )(3, 2)

console.log('test',typeof(test))
