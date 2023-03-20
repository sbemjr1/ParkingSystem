const firebaseConfig = {
  apiKey: "AIzaSyC2X64sTtnuCGA5zwYwjplQdPIzPVkkRowY",
  authDomain: "yolov7-pklot.firebaseapp.com",
  databaseURL: "https://yolov7-pklot-default-rtdb.firebaseio.com",
  projectId: "yolov7-pklot",
  storageBucket: "yolov7-pklot.appspot.com",
  messagingSenderId: "568242926157",
  appId: "1:568242926157:web:885b0a2100ac1877a72204",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const slotsContainer = document.getElementById("slots-container");
const trueCounter = document.getElementById("true-counter");
const falseCounter = document.getElementById("false-counter");

const slotsRef = database.ref();
slotsRef.on("value", function (snapshot) {
  // Clear previous slot elements
  while (slotsContainer.firstChild) {
    slotsContainer.removeChild(slotsContainer.firstChild);
  }

  let trueCount = 0;
  let falseCount = 0;

  // Add new slot elements
  snapshot.forEach(function (childSnapshot) {
    const slotId = childSnapshot.key;
    const slotValue = childSnapshot.val();
    const slotElement = document.createElement("div");
    slotElement.className = "slot";
    slotElement.id = slotId;
    if (slotValue) {
      slotElement.style.backgroundColor = "red";
      trueCount++; // Slot is occupied
    } else {
      slotElement.style.backgroundColor = "green";
      falseCount++; // Slot is vacant
    }
    slotsContainer.appendChild(slotElement);
  });
  trueCounter.textContent = trueCount;
  falseCounter.textContent = falseCount;
});
