// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
const listItems = document.querySelectorAll("li");

const stuff = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerText = stuff[i]
};

// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property
const newBackground =  document.getElementsByTagName("ul")[0];
newBackground.classList.add("ul");