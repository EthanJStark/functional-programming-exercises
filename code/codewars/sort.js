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

const getAllLanguages = list => list.map(language)
const getAllLanguagesAndNames = list => list.map(languageAndName)

// EVERYTHING ABOVE IS PROCESS, AND NOT USED


// OUR ANSWER (kinda)
function dynamicSort(property) {
    return function (obj1,obj2) {
        return obj1[property] > obj2[property] ? 1
            : obj1[property] < obj2[property] ? -1 : 0;
    }
}

function dynamicSortMultiple() {

    var props = arguments
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

let test = list1.sort(dynamicSortMultiple('language', 'firstName'))
console.log('test',test)

//ONE OF THEIR ANSWERS:

function sortByLanguage(list) {
  return list.sort((a,b)=> (a.language.toLowerCase() == b.language.toLowerCase()) ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language));
}
