const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/images/coins.jpeg") {
        myImage.setAttribute(src, "../images/jail.webp");
    }
    else {
        myImage.setAttribute("src", "../images/coins.jpeg");
    }
};