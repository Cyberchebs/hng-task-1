//current utc code
function updateUTCTime() {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = now.getUTCMilliseconds().toString().padStart(3, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("utc").textContent = timeString;
}

updateUTCTime();

setInterval(updateUTCTime, 1);

//current day code

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
