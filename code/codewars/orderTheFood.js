var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian' },
]



//First answer
// const getOrder = person => person.meal

// const getAllOrders = list => list.map(getOrder)

// const orderFood = list1 => {
//   return getAllOrders(list1).reduce( (orderTallyObject, order ) => {
//     if (order in orderTallyObject ) {
//       orderTallyObject[order]++
//     }
//     else {
//       orderTallyObject[order] = 1
//     }
//     return orderTallyObject
//   }, {})
// }

//Second answer


//Curry is not our code; credit: http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/
function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      }
    }
  };
}

const prop = curry( function( property, object ) {
  return object[property]
})

const getOrder = prop('meal')

const getAllOrders = list => list.map(getOrder)

const orderFood = list1 => {
  return getAllOrders(list1).reduce( (orderTallyObject, order ) => {
    // OURS
    // if (order in orderTallyObject ) {
    //   orderTallyObject[order]++
    // }
    // else {
    //   orderTallyObject[order] = 1
    // }
    // PUNIT'S
    orderTallyObject[order] = (orderTallyObject[order] || 0) + 1
    return orderTallyObject
  }, {})
}

//Someone else's cool example:

const orderFood = a => {
  return a.reduce( (acc,user) => {
    return ( acc[user.meal] = ( acc[user.meal] || 0 ) + 1, acc )
  }, {} )
} ;
