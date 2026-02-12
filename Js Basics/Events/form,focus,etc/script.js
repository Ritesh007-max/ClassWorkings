const formNameInput = document.querySelector("#formNameInput");
const formResult = document.querySelector("#formResult");
const submitBtn = document.querySelector("#submitBtn");
const focusInput = document.querySelector("#focusInput");
const itemList = document.querySelector("#itemList");
const keyInfo = document.querySelector("#keyInfo");
const itemClickResult = document.querySelector("#itemClickResult");

submitBtn.addEventListener('click', () => {
  sessionStorage.setItem('Name', formNameInput.value);
  formNameInput.value = "";
  formResult.textContent = sessionStorage.getItem('Name');
});

focusInput.addEventListener("focus", () => {
  focusInput.style.border = "2px solid blue";
});

focusInput.addEventListener("blur", () => {
  focusInput.style.border = "1px solid #ccc";
});

document.addEventListener('keydown', (event) => {
  keyInfo.textContent = event.key;
  console.log(keyInfo.textContent);
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("sizeInfo").textContent =
    `Width: ${width}px, Height: ${height}px`;
});

itemList.addEventListener('click', (event) => {
  itemClickResult.textContent = event.target.textContent;
});