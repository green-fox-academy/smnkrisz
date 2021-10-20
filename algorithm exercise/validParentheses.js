// https://www.codewars.com/kata/52774a314c2333f0a7000688

// passed 113 and failed 6, but there are no clue why

function validParentheses(parens) {
  let forwardParens = 0;
  let reverseParens = 0;
  let arrayToExamine = parens.split('')
  arrayToExamine.forEach(p => {
    if (p === '(') {
      forwardParens++;
    } else if (p === ')') {
      reverseParens++;
    }
  })
  let result = forwardParens == reverseParens ? true : false;
  return result;
}
