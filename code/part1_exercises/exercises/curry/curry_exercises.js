require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// Initial:
// var words = function(str) {
//   return split(' ', str);
// };

// Our first answer
// var split2 = function ( separator ) {
//   return function ( string ) {
//     return split( separator, string )
//   }
// }
// var words = split2(' ')

// Their answer:
// var words = _.split(' ');

// Our 2nd attempt:

var curry = _.curry

var split2 = string => {
  return split( ' ', string )
}

var words = curry( split2 )


// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

// OUR FIRST ATTEMPT
var sentences = array => {
  return _.map( words, array ) // _.map( words, array )(array) -Melody
}

// THEIR ANSWER
// var sentences = _.map(words);

function addB (b) {
  return function addCtoB (c) {
    return b + c
  }
}

var addOne = addB(1) // -> function to return 1 + (its arg)


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// ORIGINAL
// var filterQs = function(xs) {
//   return filter(function(x){ return match(/q/i, x);  }, xs);
// };

// OUR FIRST ANSWER:
var filterQs = filter( x => match(/q/i, x))

// THEIR ANSWER:
// var filterQs = _.filter(match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

var max = _.reduce(_keepHighest(xs), -Infinity) // WIP!


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = undefined;


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = undefined;


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
