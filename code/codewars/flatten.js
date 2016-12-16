var flatten = function (array){
  return array.reduce( function(a, b) {
  a.concat(b)}, [])
}
