// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  let sum = 0
  for (let i = 1; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i
    }
  }
  return sum
}