// https://www.codewars.com/kata/5226eb40316b56c8d500030f

function pascalsTriangle(n) {
  const triangle = []
  const flatTriangle = []

  for (let i = 0; i < n; i++) {
    const row = []

    if (i === 0) {
      row.push(1)
    } else {
      row.push(1)
      for (let j = 0; j < triangle[i - 1].length - 1; j++) {
        const sum = triangle[i - 1][j] + triangle[i - 1][j + 1]
        row.push(sum)
      }
      row.push(1)
    }
    triangle.push(row)
  }
  triangle.forEach(row => {
    row.forEach(num => {
      flatTriangle.push(num)
    })
  })
  return flatTriangle
}