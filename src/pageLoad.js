// grab div#content
const mainContent = document.getElementById("content");
console.log(mainContent);

// add waifu background
let waifuBackground = document.createElement("img");
waifuBackground.src = "anime-waifu.jpg";
mainContent.appendChild(waifuBackground);