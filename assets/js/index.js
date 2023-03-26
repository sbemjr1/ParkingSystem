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
const slotsContainer01 = document.getElementById("slots-container_01");
const slotsContainer02 = document.getElementById("slots-container_02");
const slotsContainer03 = document.getElementById("slots-container_03");
const slotsContainer04 = document.getElementById("slots-container_04");
const slotsContainer05 = document.getElementById("slots-container_05");
const slotsContainer06 = document.getElementById("slots-container_06");
const trueCounter = document.getElementById("true-counter");
const falseCounter = document.getElementById("false-counter");
const specialTrueCounter = document.getElementById("special-true-counter");
const specialFalseCounter = document.getElementById("special-false-counter");

const slotsRef = database.ref();
slotsRef.on("value", function (snapshot) {
  // Clear previous slot elements
  while (slotsContainer01.firstChild) {
    slotsContainer01.removeChild(slotsContainer01.firstChild);
  }
  while (slotsContainer02.firstChild) {
    slotsContainer02.removeChild(slotsContainer02.firstChild);
  }
  while (slotsContainer03.firstChild) {
    slotsContainer03.removeChild(slotsContainer03.firstChild);
  }
  while (slotsContainer04.firstChild) {
    slotsContainer04.removeChild(slotsContainer04.firstChild);
  }
  while (slotsContainer05.firstChild) {
    slotsContainer05.removeChild(slotsContainer05.firstChild);
  }
  while (slotsContainer06.firstChild) {
    slotsContainer06.removeChild(slotsContainer06.firstChild);
  }

  let trueCount = 0;
  let falseCount = 0;
  let specialTrueCount = 0;
  let specialFalseCount = 0;

  // Add new slot elements
  snapshot.forEach(function (childSnapshot) {
    if (childSnapshot.key === "slot_00") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // 자리 없음
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // 자리 있음
      }
      slotsContainer01.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_01") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer01.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_02") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer01.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_03") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        specialTrueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#0095FF";
        specialFalseCount++; // Slot is vacant
      }
      slotsContainer01.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_04") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        specialTrueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#0095FF";
        specialFalseCount++; // Slot is vacant
      }
      slotsContainer01.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_05") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer02.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_06") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer02.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_07") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer02.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_08") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer02.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_09") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer02.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_10") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer03.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_11") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer03.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_12") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer03.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_13") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer03.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_14") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer03.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_15") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer04.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_16") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer04.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_17") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer04.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_18") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer04.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_19") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer04.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_20") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer05.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_21") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer05.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_22") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer05.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_23") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer05.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_24") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer05.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_25") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer06.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_26") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer06.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_27") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer06.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_28") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer06.appendChild(slotElement);
    } else if (childSnapshot.key === "slot_29") {
      const slotId = childSnapshot.key;
      const slotValue = childSnapshot.val();
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = slotId;
      if (slotValue) {
        slotElement.style.backgroundColor = "#E02828";
        trueCount++; // Slot is occupied
      } else {
        slotElement.style.backgroundColor = "#008200";
        falseCount++; // Slot is vacant
      }
      slotsContainer06.appendChild(slotElement);
    }
  });
  falseCounter.textContent = falseCount;

  specialFalseCounter.textContent = specialFalseCount;
});
