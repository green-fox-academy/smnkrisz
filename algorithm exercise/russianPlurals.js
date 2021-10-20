// https://www.codewars.com/kata/5b1d38f4d74b5b07350000a3

const makePlural = (options, number) => {
  if (number % 5 === 0 || number % 10 >= 5 || number >= 11 && number <= 14) return options[2];
  if (number % 10 === 1) return options[0];
  return options[1]
}
