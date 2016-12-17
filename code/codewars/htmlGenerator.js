// OUR FIRST ANSWER

function HTMLGen() {
  this.div = inner => `<div>${inner}</div>`
  this.b = inner => `<b>${inner}</b>`
  this.p = inner => `<p>${inner}</p>`
  this.a = inner => `<a>${inner}</a>`
  this.body = inner => `<body>${inner}</body>`
  this.span = inner => `<span>${inner}</span>`
  this.title = inner => `<title>${inner}</title>`
  this.comment = inner => `<!--${inner}-->`
}

// REFACTORED 2ND ANSWER
const RefactoredHTMLGen = tag => inner => tag === 'comment' ? `<!--${inner}-->` : `<${tag}>${inner}</${tag}>`

// CODEWAR EXAMPLE
// function HTMLGen() {}
//
// ['a', 'b', 'p', 'body', 'div', 'span', 'title'].forEach(function(tag) {
//   HTMLGen.prototype[tag] = function(content) {
//     return '<' + tag + '>' + content + '</' + tag + '>'
//   }
// })
//
// HTMLGen.prototype.comment = function(content) {
//   return '<!--' + content + '-->'
// }

const g = new HTMLGen()
var test = RefactoredHTMLGen('comment')('Hello')
// var test = g.div(g.b('Hey there'))
console.log('test',test)
