const myHeading = document.querySelector("h1");
myHeading.textContent = "Koenigsegg";

alert("Hello!");

// document.querySelector("html").addEventListener("click", function() {
//     alert("Ow stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
   const mySrc = myImage.getAttribute("src");
   if (mySrc === "../images/koenigsegg.jpg"){
    myImage.setAttribute("src", "../images/koenigsegg2.jpg");
   } else {
    myImage.setAttribute("src", "../images/koenigsegg.jpg");
   }
};