// https://www.hackerrank.com/challenges/mini-max-sum/

function miniMaxSum(arr) {
  let sortedArray = arr.sort();

  let min = sortedArray[0] + sortedArray[1] + sortedArray[2] + sortedArray[3]
  let max = sortedArray[1] + sortedArray[2] + sortedArray[3] + sortedArray[4]

  console.log(min, max)

}
