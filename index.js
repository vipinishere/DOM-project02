const timeBlock = document.getElementById("clock");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString().slice(0, 8);
  const amorpm = date.toLocaleTimeString().slice(8, 10).toUpperCase();
  timeBlock.innerHTML = `${time} ${amorpm}`;
}, 1000);
