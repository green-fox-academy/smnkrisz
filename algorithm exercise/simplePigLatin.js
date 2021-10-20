// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  let newArr = []
  let arr = str.split(" ")

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "?" && arr[i] !== "!") {
      let word = arr[i]
      let newWords = word.slice(1) + word.charAt(0) + "ay"
      newArr.push(newWords)
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr.join(" ")
}
