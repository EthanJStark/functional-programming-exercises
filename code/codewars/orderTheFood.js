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
const getOrder = person => person.meal

const getAllOrders = list => list.map(getOrder)

const orderFood = list1 => {
  return getAllOrders(list1).reduce( (orderTallyObject, order ) => {
    if (order in orderTallyObject ) {
      orderTallyObject[order]++
    }
    else {
      orderTallyObject[order] = 1
    }
    return orderTallyObject
  }, {})
}

//Second answer

const curry = function n(r){return 0===arguments.length||w(r)?n:t.apply(this,arguments)}
