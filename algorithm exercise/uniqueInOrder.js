// https://www.codewars.com/kata/54e6533c92449cc251001667

let uniqueInOrder = function (iterable) {
  let result = []
  for (let i = 0, length = iterable.length; i < length; i++) {
    if (iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])) {
      result.push(iterable[i]);
    }
  }
  return result;
}