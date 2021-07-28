// Write the image's url to the console.
const image = document.querySelector("img");
console.log(image.getAttribute("src"));

// Replace the image with a picture of your favorite animal.
image.setAttribute("src", "https://images.theconversation.com/files/260231/original/file-20190221-195864-2t43e7.jpg");

// Make the link point to the Green Fox Academy website.
const newLink = document.querySelector("a");
newLink.setAttribute("href", "https://www.greenfoxacademy.com/");

// Disable the second button.
const secondButton = document.getElementsByClassName("this-one");
secondButton[0].remove();

// Replace its text with 'Don't click me!'.
const secondButton = document.querySelector("button");
secondButton.innerText = "Don't click me!";