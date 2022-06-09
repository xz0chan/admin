var clicks = 0;
function popup() {
  document.getElementById("popup-click").classList.toggle("active");
  clicks++;
  document.getElementById("clicks").innerHTML = clicks;
  var button_reset = document.getElementById("button_reset");
  if (clicks >= 5) {
    button_reset.style.display = "block";
  } else {
    button_reset.style.display = "none";
  }
}
function popup_close() {
  document.getElementById("popup-click").classList.toggle("active");
}
function popupReset() {
  clicks = 0;
}
