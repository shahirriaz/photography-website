import db, {
  collectionFromDB,
  getDocsFromDB,
  setFromDB,
  docFromDB,
  deleteDocFromDB,
} from "https://us-central1-photography-5b191.cloudfunctions.net/api/auth.js";


// "http://localhost:5001/photography-5b191/us-central-1/api/auth.js";


const fp = flatpickr("input[type=datetime-local]", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  minDate: "2021-08",
});

fp.config.onChange.push(function (selectedDates, dateStr, instance) {
  // console.log(selectedDates, dateStr);
  sendDataToDB(selectedDates, dateStr);
  deleteDataFrpmDB(selectedDates, dateStr);
  printChosenDates(selectedDates);
  // printChosenDates(selectedDates);
});

let sendBtn = document.getElementById("buttonSend");
let sendBtn2 = document.getElementById("buttonSend2");

const user = JSON.parse(sessionStorage.getItem("user"));

const newDateObj = new Date();

let welcomeMessage = document.getElementById("welcome");

let timeOfday = newDateObj.getHours();

console.log(timeOfday);

let email = user?.email.toString();

var name = email.match(/^([^@]*)@/)[1];

var upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);



if (timeOfday > 6 && timeOfday < 12 ) {
  welcomeMessage.innerHTML = `God morgen ${upperCaseName}`;
} else welcomeMessage.innerHTML = `God kveld ${upperCaseName}`;

const asidePanel = document.getElementById("aside");
const asidePanel2 = document.getElementById("aside2");

const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

function sendDataToDB(dateToDisable, dateStr) {
  sendBtn.addEventListener("click", function () {
    console.log("Hello");
    var areUSure = prompt(
      `Do you wish to disable ${dateStr} Please enter` + " \n I am sure",
      "I am sure"
    );

    if (areUSure === "I am sure") {
      const handleData = async () => {
        await setFromDB(docFromDB(db, "bookingDate", dateStr.toString()), {
          date: dateToDisable[0],
        });
      };
      handleData();
    }
  });
}
function deleteDataFrpmDB(dateToDisable, dateStr) {
  sendBtn2.addEventListener("click", function () {
    console.log("Hello");
    var areUSure = prompt(
      `Do you wish to enable ${dateStr} Please enter` + " \n I am sure",
      "I am sure"
    );

    if (areUSure === "I am sure") {
      const handleData = async () => {
        await deleteDocFromDB(
          docFromDB(db, "bookingDate", dateStr.toString()),
          {
            date: dateToDisable[0],
          }
        );
      };
      handleData();
    }
  });
}

async function getDatesFromDB(db) {
  const bookingDate = collectionFromDB(db, "bookingDate");
  const dateSnapshot = await getDocsFromDB(bookingDate);
  const datesList = dateSnapshot.docs.map((doc) => doc.data().date.toDate());
  printDisabledDates(datesList);
}
await getDatesFromDB(db);

async function printDisabledDates(datesList) {
  if (datesList) {
    asidePanel.innerHTML = datesList.map((date) => {
      return ` 
             <li id="list"><h2>${date
               ?.toLocaleDateString(undefined, options)
               .toString()
               .toUpperCase()}</h2></li>
              
              `;
    });
  }
}
await printDisabledDates();

async function printChosenDates(dateToDisable) {
  if (dateToDisable) {
    asidePanel2.innerHTML += `
             <li id="list"><h2>${dateToDisable[0]
               .toLocaleDateString(undefined, options)
               .toString()
               .toUpperCase()}</h2></li>
  
              `;
  }
}
