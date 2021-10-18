// https://www.hackerrank.com/challenges/ctci-ransom-note

function checkMagazine(magazine, note) {
  let answer = 'Yes'

  if (note.length > magazine.length) {
    answer = 'No'
  } else {
    note.forEach(word => {
      const wordIndexInMagazine = magazine.indexOf(word)
      if (wordIndexInMagazine === -1) {
        answer = 'No'
      } else {
        magazine.splice(wordIndexInMagazine, 1)
      }
    })
  }
  console.log(answer)
}