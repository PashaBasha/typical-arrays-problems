
exports.min = function min(array) {
  if (array && array.length) {
    return Math.min.apply(null, array)
  }
  else return 0
}

exports.max = function max(array) {
  if (array && array.length) {
    return Math.max.apply(null, array)
  }
  else return 0
}

return exports.avg = function avg(array) {
  if (array && array.length) {
    return array.reduce((a, b) => a + b, 0) / array.length


  }
  else return 0

}
