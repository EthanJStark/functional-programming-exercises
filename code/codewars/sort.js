var list1 = [
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

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

const language = prop('language')

const firstName = prop('firstName')

const languageAndName = obj => {
  let lang = language(obj)
  let firstN = firstName(obj)
  return {language: lang, firstName: firstN}
}

const sortByLanguageAndFirstName = list => {

}

let test = languageAndName(list1[0])
console.log('test',test)

const getAllLanguages = list => list.map(language)
const getAllLanguagesAndNames = list => list.map(languageAndName)

let test1 = getAllLanguagesAndNames(list1)
console.log('test1',test1)

//Lunch! Model: http://stackoverflow.com/questions/11379361/how-to-sort-an-array-of-objects-with-multiple-field-values-in-javascript
