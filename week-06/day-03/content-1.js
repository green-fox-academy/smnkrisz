// Only works when one of them is commented


// 1)  Append every paragraph with the last one's content.
const paragraph = document.querySelectorAll("p");

for (const i in paragraph) {
    paragraph[i].innerText = paragraph[i].innerText + " " + paragraph[paragraph.length - 1].innerText;
}

// 2)  Do the same again, but you should keep the cat strong.
for (const i in paragraph) {
    paragraph[i].innerHTML = paragraph[i].innerHTML + " " + paragraph[paragraph.length - 1].innerHTML;
}