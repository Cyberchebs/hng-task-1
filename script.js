//current utc code
// function updateUTCTime() {
//   const now = new Date();
//   const hours = now.getUTCHours().toString().padStart(2, "0");
//   const minutes = now.getUTCMinutes().toString().padStart(2, "0");
//   const seconds = now.getUTCSeconds().toString().padStart(2, "0");
//   const milliseconds = now.getUTCMilliseconds().toString().padStart(3, "0");
//   const timeString = `${hours}:${minutes}:${seconds}`;
//   document.getElementById("utc").textContent = timeString;
// }

// updateUTCTime();

// setInterval(updateUTCTime, 1);

//current day code

function displayUTCTime() {
  const currentTime = new Date();
  let utcHours = currentTime.getUTCHours();
  const utcMinutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
  const utcSeconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
  const utcMilliseconds = currentTime
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");

  const ampm = utcHours >= 12 ? "PM" : "AM";
  utcHours = utcHours % 12;
  utcHours = utcHours ? utcHours : 12; // the hour '0' should be '12'
  const utcHoursStr = utcHours.toString().padStart(2, "0");

  const utcString = `${utcHoursStr}:${utcMinutes}:${utcSeconds}.${ampm}`;
  document.getElementById("utc").innerText = utcString;
}

// Update the time every millisecond
setInterval(displayUTCTime, 1);

// Initial display
displayUTCTime();

//code for day

function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayIndex = today.getDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  document.getElementById("day").textContent = dayOfWeek;
}
updateDayOfWeek();
