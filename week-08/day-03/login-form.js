const icon = document.querySelector("img");
const pwd = document.querySelector("#password");
let visible = false;

icon.addEventListener("click", () => {
  if (!visible) {
    visible = true;
    pwd.type = "text";
  } else {
    visible = false;
    pwd.type = "password";
  }
});
