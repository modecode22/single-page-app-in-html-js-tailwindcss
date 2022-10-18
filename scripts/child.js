let childNumber = document.getElementById("childNumber");
let childName = document.getElementById("childName");
let parentName = document.getElementById("parentName");
let fatherPhone = document.getElementById("fatherPhone");
let motherPhone = document.getElementById("motherPhone");
let childBirthDay = document.getElementById("childBirthDay");
let childGroupe = document.getElementById("childGroupe");
let studyType = document.getElementById("studyType");
let childVaccine = document.getElementById("childVaccine");
let childFood = document.getElementById("childFood");
let childProperties = document.getElementById("childProperties");
let note = document.getElementById("note");
let childImg = document.getElementById("childImg");
let childEntryDay = document.getElementById("childEntryDay");
let WorkerOfChild = document.getElementById("WorkerOfChild");
let studyYear = document.getElementById("studyYear");
let addChild = document.getElementById("addChild");
let childTbody = document.getElementById("childTbody");

let childsPageMood = "create";
let tmpC;

//! this is for the input

//* carent day
let childdate = new Date();
let childcarentDay = `${childdate.getDate()}/${
  childdate.getMonth() + 1
}/${childdate.getFullYear()}`;

//*make carent day  in the input
childEntryDay.value = childcarentDay;

//*workers data for child
let workersDataforChild;
if (localStorage.workers != null) {
  workersDataforChild = JSON.parse(localStorage.workers);
} else {
  workersDataforChild = [];
}

//*make workers options
let refreashWorkersOptins = () => {
  let NewWorkersOptionsforChild = "";
  for (let i = 0; i < workersDataforChild.length; i++) {
    NewWorkersOptionsforChild += `
    <option>${workersDataforChild[i].name}</option>
    `;
  }
  WorkerOfChild.innerHTML = NewWorkersOptionsforChild;
};
refreashWorkersOptins();

//*groups data for Child
let groupsDataforChild;
if (localStorage.groups != null) {
  groupsDataforChild = JSON.parse(localStorage.groups);
} else {
  groupsDataforChild = [];
}

//*make Groups options
let refreashGroupsOptins = () => {
  let NewGroupsOptionsforChild = "";
  for (let i = 0; i < groupsDataforChild.length; i++) {
    NewGroupsOptionsforChild += `
    <option>${groupsDataforChild[i].name}</option>
    `;
  }
  childGroupe.innerHTML = NewGroupsOptionsforChild;
};
refreashGroupsOptins();

//* importing chid data
let childData;
if (localStorage.child != null) {
  childData = JSON.parse(localStorage.child);
} else {
  childData = [];
}

addChild.onclick = () => {
  newChild = {
    name: childName.value,
    id: childNumber.value,
    parents: parentName.value,
    fatherPhone: fatherPhone.value,
    motherPhone: motherPhone.value,
    birthDay: childBirthDay.value,
    groupe: childGroupe.value,
    studyType: studyType.value,
    childVaccine: childVaccine.value,
    childFood: childFood.value,
    childProperties: childProperties.value,
    note: note.value,
    childImg: childImg.value,
    childEntryDay: childEntryDay.value,
    WorkerOfChild: WorkerOfChild.value,
    studyYear: studyYear.value,
  };
  if (
    childName.value != "" &&
    childNumber.value != "" &&
    parentName.value != ""
  ) {
    if (childsPageMood === "create") {
      childData.push(newChild);
    } else {
      childData[tmpC] = newChild;
      childsPageMood = "create";
      addChild.innerHTML = "إضافة";
    }
    clearChildData();
  }

  localStorage.setItem("child", JSON.stringify(childData));
  showChilds();
};

//* to make input clear
function clearChildData() {
  childName.value = "";
  childNumber.value = "";
  parentName.value = "";
  fatherPhone.value = "";
  motherPhone.value = "";
  childBirthDay.value = "";
  childGroupe.value = "";
  studyType.value = "";
  childVaccine.value = "";
  childFood.value = "";
  childProperties.value = "";
  note.value = "";
  childImg.value = "";
  childEntryDay.value = "";
  WorkerOfChild.value = "";
  studyYear.value = "";
  refreashGroupsOptins();
  refreashWorkersOptins();
}

function showChilds() {
  let childOutput = "";
  for (let i = 0; i < childData.length; i++) {
    childOutput += ` <tr class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${childData[i].id}
              </th>
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="${childData[i].childImg}" class="rounded-xl h-28 max-w-min" alt="">
              </th>
              <td class="py-4 px-6">
                ${childData[i].name}
              </td>
              <td class="py-4 px-6 ">
                <svg  title="تعديل" onclick="updateChilddata(${i})" class=" relative flex items-center justify-center h-7 w-7 mt-2 mb-2 mx-auto  hover:bg-green-600
                              bg-gray-900 text-green-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear
                              cursor-pointer shadow-lg group" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" class="w-4 h-4">
                  <path
                    d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path
                    d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>

                <svg  title="حذف" onclick="deleteChildData(${i})" class="relative flex items-center justify-center h-7 w-7 mt-2 mb-2 mx-auto  hover:bg-red-600
                              bg-gray-900 text-red-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear
                              cursor-pointer shadow-lg group" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clip-rule="evenodd" />
                </svg>
              </td>
              <td class="py-4 px-6">
${childData[i].parents}
              </td>
              <td class="py-4 px-6">
                ${childData[i].fatherPhone}
              </td>

              <td class="py-4 px-6">
                ${childData[i].childEntryDay}
              </td>
              <td class="py-4 px-6">
                ${childData[i].WorkerOfChild}
              </td>
              <td class="py-4 px-6">
                ${childData[i].motherPhone}
              </td>
              <td class="py-4 px-6">
                ${childData[i].birthDay}
              </td>
              <td class="py-4 px-6">
                ${childData[i].groupe}
              </td>
              <td class="py-4 px-6">
                ${childData[i].studyType}
              </td>
              <td class="py-4 px-6">
                ${childData[i].childVaccine}
              </td>
              <td class="py-4 px-6">
                ${childData[i].childFood}
              </td>
              <td class="py-4 px-6">
                <img class="rounded-xl h-28 max-w-min" src="${childData[i].childProperties}" alt="">
              </td>
              <td class="py-4 px-6">
                ${childData[i].note}
              </td>
              <td class="py-4 px-6">
                ${childData[i].studyYear}
              </td>
            </tr>`;
    console.log(childData[i].childImg);
  }
  childTbody.innerHTML = childOutput;
}
showChilds();

//* delete worker function
function deleteChildData(i) {
  childData.splice(i, 1);
  localStorage.child = JSON.stringify(childData);
  showChilds();
}

function updateChilddata(i) {
  childName.value = childData[i].name;
  childNumber.value = childData[i].id;
  parentName.value = childData[i].parents;
  fatherPhone.value = childData[i].fatherPhone;
  motherPhone.value = childData[i].motherPhone;
  childBirthDay.value = childData[i].birthDay;
  childGroupe.value = childData[i].groupe;
  studyType.value = childData[i].studyType;
  childVaccine.value = childData[i].childVaccine;
  childFood.value = childData[i].childFood;
  childProperties.value = childData[i].childProperties;
  note.value = childData[i].note;
  childImg.value = childData[i].childImg;
  childEntryDay.value = childData[i].childEntryDay;
  WorkerOfChild.value = childData[i].WorkerOfChild;
  studyYear.value = childData[i].studyYear;
  addChild.innerHTML = "عدل";
  childsPageMood = "update";
  tmpC = i;
}
