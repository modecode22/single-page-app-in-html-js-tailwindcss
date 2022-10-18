let workers = document.getElementById("workers");
let workersName = document.getElementById("workersName");
let workersId = document.getElementById("workersId");
let workersBirthDay = document.getElementById("workersBirthDay");
let workersNumber = document.getElementById("workersNumber");
let state = document.getElementById("state");
let workersSalery = document.getElementById("workersSalery");
let workersHome = document.getElementById("workersHome");
let workersDegree = document.getElementById("workersDegree");
let workersBirthPlace = document.getElementById("workersBirthPlace");
let workersEntryDay = document.getElementById("workersEntryDay");
let addWorker = document.getElementById("addWorker");
let workersOutputContainer = document.getElementById("tbodyWorkers");

let workersPageMood = "create";
let tmp;
//* carent day
let date = new Date();
let carentDay = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;

//*make carent day  in the input

workersEntryDay.value = carentDay;

//* so that for locale storege  of workers data
let workersData;
if (localStorage.workers != null) {
  workersData = JSON.parse(localStorage.workers);
} else {
  workersData = [];
}

addWorker.onclick = () => {
  newWorker = {
    name: workersName.value,
    id: workersId.value,
    birthDay: workersBirthDay.value,
    number: workersNumber.value,
    state: state.value,
    salery: workersSalery.value,
    home: workersHome.value,
    degree: workersDegree.value,
    birthPlace: workersBirthPlace.value,
    entryDay: workersEntryDay.value,
  };
  if (
    workersName.value != "" &&
    workersId.value != "" &&
    workersNumber.value != ""
  ) {
    if (workersPageMood === "create") {
      workersData.push(newWorker);
    } else {
      workersData[tmp] = newWorker;
      workersPageMood = "create";
      addWorker.innerHTML = "إضافة";
    }
    clearData();
  }

  localStorage.setItem("workers", JSON.stringify(workersData));
  showWorkers();
};

//* to make input clear
function clearData() {
  workersName.value = "";
  workersId.value = "";
  workersBirthDay.value = "";
  workersNumber.value = "";
  state.value = "";
  workersSalery.value = "";
  workersHome.value = "";
  workersDegree.value = "";
  workersBirthPlace.value = "";
  workersEntryDay.value = "";
}

function showWorkers() {
  let workersOutput = "";
  for (let i = 0; i < workersData.length; i++) {
    workersOutput += `
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${workersData[i].id}
              </th>
              <td class="py-4 px-6">
              ${workersData[i].name}
              </td>
              <td class="py-4 px-6">
                ${workersData[i].number}
              </td>
              <td class="py-4 px-6 flex justify-evenly">
                                <svg onclick="updatedata(${i})" title="تعديل" class="mr-4 relative flex items-center justify-center h-7 w-7 mt-2 mb-2 mx-auto  hover:bg-green-600
  bg-gray-900 text-green-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear
  cursor-pointer shadow-lg group" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path
                    d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path
                    d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>
            
                <svg onclick="deleteData(${i})" title="حذف" class="relative flex items-center justify-center h-7 w-7 mt-2 mb-2 mx-auto  hover:bg-red-600
  bg-gray-900 text-red-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear
  cursor-pointer shadow-lg group" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clip-rule="evenodd" />
                </svg>
              </td>
              <td class="py-4 px-6">
                ${workersData[i].salery}
              </td>
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${workersData[i].entryDay}
              </th>
              <td class="py-4 px-6">
                ${workersData[i].home}
              </td>
              <td class="py-4 px-6">
              ${workersData[i].state}
              </td>
              <td class="py-4 px-6">
                ${workersData[i].degree}
              </td>
              <td class="py-4 px-6">
                ${workersData[i].birthDay}
              </td>
              <td class="py-4 px-6">
                ${workersData[i].birthPlace}
              </td>
            </tr>`;
  }
  workersOutputContainer.innerHTML = workersOutput;
}
showWorkers();

//* delete worker function
function deleteData(i) {
  workersData.splice(i, 1);
  localStorage.workers = JSON.stringify(workersData);
  showWorkers();
}

function updatedata(i) {
  workersName.value = workersData[i].name;
  workersId.value = workersData[i].id;
  workersBirthDay.value = workersData[i].birthDay;
  workersNumber.value = workersData[i].number;
  state.value = workersData[i].state;
  workersSalery.value = workersData[i].salery;
  workersHome.value = workersData[i].home;
  workersDegree.value = workersData[i].degree;
  workersBirthPlace.value = workersData[i].birthPlace;
  workersEntryDay.value = workersData[i].entryDay;
  addWorker.innerHTML = "عدل";
  workersPageMood = "update";
  tmp = i;
}


