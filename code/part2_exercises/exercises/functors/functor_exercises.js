require('../../support');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value inside a functor

// OUR ANSWER, IN WHICH WE ENDED UP RECREATING TEST CODE, BUT ULTIMATELY DID NOT GET THE RIGHT ANSWER
// function ex1( x ) {
//   this.__value = x
// }
//
// ex1.of = x => { return new ex1(x) }
//
// ex1.prototype.map = f => {
//   return ex1.of( f(this.__value))
// }
//
// var test = ex1.of(5)._.map( _.add(1))

//THEIR ANSWER
 var ex1 = _.map( _.add(1) )



// Exercise 2
// ==========
// Use _.head to get the first element of the list
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

var ex2 = _.map( _.head )



// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user
var safeProp = _.curry(function (x, o) {
  return Maybe.of(o[x]); });

var user = { id: 2, name: "Albert" };

//OUR ANSWER AND THEIR ANSWER
var ex3 = _.compose( map( _.head ),  safeProp('name') )


// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement

// var ex4 = function (n) {
//   if (n) { return parseInt(n); }
// };

//OUR ANSWER
var ex4 = _.curry( function (n) {
  return Maybe.of(n).map(parseInt)
})

//THEIR ANSWER
// var ex4 = _.compose(_.map(parseInt), Maybe.of);

// var test = ex4(undefined)
// console.log('test', test.isNothing());
// console.log(Maybe.of(null))



// Exercise 5
// ==========
// Write a function that will getPost then _.toUpper the post's title

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function (i) {
  return new Task(function(rej, res) {
    setTimeout(function(){
      res({id: i, title: 'Love them futures'})
    }, 300)
  });
};

//OUR ANSWER (didn't need curry)
var ex5 = _.curry( n => getPost(n).map(result => _.toUpper(result.title)
))

//THEIR ANSWER
// var upperTitle = _.compose(toUpperCase, _.prop('title'));
// var ex5 = _.compose(_.map(upperTitle), getPost);

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access or return the error

var showWelcome = _.compose(_.concat( "Welcome "), _.prop('name'));

var checkActive = function(user) {
 return user.active ? Right.of(user) : Left.of('Your account is not active')
};

var ex6 = _.compose( _.map(showWelcome), checkActive )



// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise

var ex7 = function(x) {
  return ( x.length > 3) ? Right.of(x) : Left.of("You need > 3"); // <--- write me. (don't be pointfree)
};



// Exercise 8
// ==========
// Use ex7 above and either as a functor to save the user if they are valid or return the error message string. Remember either's two arguments must return the same type.

var save = function(x) {
  return new IO(function() {
    console.log("SAVED USER!");
    return x + '-saved';
  });
};

//WIP exercise 8, finish exercises 6, 7, & 8 with our answer and their answer

var ex8 = function(user) {
return (ex7(user) === user) ? save(user) : Left.of(user)
};

module.exports = {ex1: ex1, ex2: ex2, ex3: ex3, ex4: ex4, ex5: ex5, ex6: ex6, ex7: ex7, ex8: ex8};
