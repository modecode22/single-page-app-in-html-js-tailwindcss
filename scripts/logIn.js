let logInForm = document.getElementById("logInForm");
let logInName = document.getElementById("logInName");
let logInPass = document.getElementById("logInPass");
let logInBtn = document.getElementById("logIn");
let asideBar = document.getElementById("asideBar");
let logInError = document.getElementById("logInError");

logInBtn.addEventListener("click", () => {
  if (logInName.value === "nomidia2022" && logInPass.value === "20182018") {
    logInForm.classList.add("hidden");
    asideBar.classList.remove("hidden");
    asidesearch.classList.remove("hidden");
    sr.classList = selectedStyle;
    lo.classList = logOutStyle;
  } else {
    logInError.classList.remove("hidden");
    setInterval(() => {
      logInError.classList.add("hidden");
    }, 3000);
  }
});
