// https://www.hackerrank.com/challenges/alternating-characters

function alternatingCharacters(word) {
  let deleteCount = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      deleteCount++
    }
  }
  return deleteCount
}
