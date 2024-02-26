 const myImage = document.querySelector("img");

 myImage.onclick = () => {
   const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/koenigsegg.jpg"){
     myImage.setAttribute("src", "./images/koenigsegg2.jpg");
    } else {
     myImage.setAttribute("src", "images/koenigsegg.jpg");
    }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
}
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
    myHeading.textContent = `Koenigsegg...where speed meets comfort. Welcome, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
}   else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Koenigsegg...where speed meets comofrt. Welcome, ${myName}`;
}