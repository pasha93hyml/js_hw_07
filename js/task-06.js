let inputRef = document.querySelector("#validation-input");
let validLength = inputRef.getAttribute(["data-length"]);

inputRef.addEventListener("change", (event) => {
  let len = event.target.value.length;

  if (len == Number(validLength)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
