// LOADER SCRIPT STARTS HERE
setTimeout(function () {
  localStorage.clear();
}, 120000);
// this clears the local storage every 2 minutes
// shows loader after 2 minutes of no reloading
displayFunction();
window.onload = function () {
  var container = document.getElementById("loading-container");
  document.body.style.overflow = "hidden";
  if (!("hasCodeRunBefore" in localStorage)) {
    setTimeout(function () {
      container.style.display = "none";
      localStorage.setItem("hasCodeRunBefore", true);
      document.body.style.overflow = "scroll";
    }, 4000);
    localStorage.setItem("display", "none");
  } else {
    container.style.display = "none";
    document.body.style.overflow = "scroll";
    localStorage.setItem("display", "none");
    displayFunction();
  }
};
function displayFunction() {
  if ("display" in localStorage) {
    // document.getElementById("loading-container").style.display = "none";
  }
}
// LOADER SCRIPT ENDS HERE// RANDOM POSTS SCRIPT STARTS HERE
// RANDOM POSTS SCRIPT STARTS HERE
// RANDOM POSTS SCRIPT STARTS HERE
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var firstPostIndex = getRandomInt(8);
document.getElementById("first-post").src =
  "./images/instagram/posts/python/0" + firstPostIndex + ".png";
var secondPostIndex = getRandomInt(8);
if (firstPostIndex === secondPostIndex) {
  secondPostIndex = getRandomInt(8);
  document.getElementById("second-post").src =
    "./images/instagram/posts/python/0" + secondPostIndex + ".png";
} else {
  document.getElementById("second-post").src =
    "./images/instagram/posts/python/0" + secondPostIndex + ".png";
}
var thirdPostIndex = getRandomInt(8);
if (firstPostIndex === thirdPostIndex || thirdPostIndex === secondPostIndex) {
  thirdPostIndex = getRandomInt(8);
  document.getElementById("third-post").src =
    "./images/instagram/posts/python/0" + thirdPostIndex + ".png";
} else {
  document.getElementById("third-post").src =
    "./images/instagram/posts/python/0" + thirdPostIndex + ".png";
}
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// DO NOT EDIT
// RANDOM POSTS SCRIPT ENDS HERE
// RANDOM POSTS SCRIPT ENDS HERE
// RANDOM POSTS SCRIPT ENDS HERE
