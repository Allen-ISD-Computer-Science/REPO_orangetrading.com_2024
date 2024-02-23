const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/coins.jpeg") {
        myImage.setAttribute("src", "images/jail.webp");
    }
    else {
        myImage.setAttribute("src", "images/coins.jpeg");
    }
};

let myButton = document.querySelector('#user');
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (myName) {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Time to Get Rich ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
