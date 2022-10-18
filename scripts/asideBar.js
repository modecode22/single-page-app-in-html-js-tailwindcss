let nav;
if (localStorage.nav != null) {
  nav = JSON.parse(localStorage.nav);
} else {
  nav = 1;
}
let asideBar1 = document.getElementById("asideBar");
let asidesearch = document.getElementById("search");
let asideworkers = document.getElementById("workers");
let asidegroups = document.getElementById("groups");
let asidechild = document.getElementById("child");
let asidemoneyIn = document.getElementById("moneyIn");
let asidemoneyOut = document.getElementById("moneyOut");
let asideabsence = document.getElementById("absence");
let asidelogInForm = document.getElementById("logInForm");

let selectedStyle =
  "relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto  bg-sky-600 text-white  rounded-xl  transition-all duration-300 ease-linear shadow-lg group";
let notSelectedStyle =
  "relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-sky-600 dark:bg-gray-900 text-sky-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group";
let logOutStyle =
  "relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-red-600 dark:bg-gray-900 text-red-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group";
let sr = document.getElementById("sr");
let wo = document.getElementById("wo");
let gr = document.getElementById("gr");
let ch = document.getElementById("ch");
let mi = document.getElementById("mi");
let mo = document.getElementById("mo");
let ab = document.getElementById("ab");
let lo = document.getElementById("lo");

let navs = [sr, wo, gr, ch, mi, mo, ab, lo];
let pages = [
  asidesearch,
  asideworkers,
  asidegroups,
  asidechild,
  asidemoneyIn,
  asidemoneyOut,
  asideabsence,
  asidelogInForm,
];
if (nav === undefined) {
  nav = 1;
}



//* this will make the page save in the state that you make it when refrech 
function uploadMainPage(a){
    for (let i = 0; i < navs.length; i++) {
    navs[i].classList = notSelectedStyle;
    if (!pages[i].classList.contains("hidden")) {
          pages[i].classList.add("hidden");}
      if (navs[i] === lo) {
        navs[i].classList = logOutStyle;}     
      }
    if(navs[a-1]===lo){
        asideBar1.classList.add("hidden")
    }
    navs[a-1].classList = selectedStyle;
    pages[a-1].classList.remove("hidden");
}
uploadMainPage(nav);


for (let y = 0; y < navs.length; y++) {
  navs[y].addEventListener("click", () => {
    for (let i = 0; i < navs.length; i++) {
    navs[i].classList = notSelectedStyle;
    if (!pages[i].classList.contains("hidden")) {
          pages[i].classList.add("hidden");}
      if (navs[i] === lo) {
        navs[i].classList = logOutStyle;}     
      }
    if(navs[y]===lo){
        asideBar1.classList.add("hidden")
    }
    navs[y].classList = selectedStyle;
    pages[y].classList.remove("hidden");
    nav = y+1
      localStorage.setItem("nav", JSON.stringify(nav));
      location.reload()
    });
}
