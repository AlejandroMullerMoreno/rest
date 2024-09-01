
function setWaifuBackground(){
// grab div#content
const mainContent = document.getElementById("content");
console.log(mainContent);

// add waifu background
let waifuBackground = document.createElement("img");
waifuBackground.src = "anime-waifu.jpg";
waifuBackground.style.position="relative";
mainContent.appendChild(waifuBackground);
}

// setWaifuBackground();

export {setWaifuBackground};