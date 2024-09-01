import { setWaifuBackground } from "./pageLoad.js";
import { generateHomePageContent } from "./homePage.js";
import { generateMenuPage } from "./menu.js";
setWaifuBackground();
generateHomePageContent();

// grab Menu tab
const menuTab = document.querySelectorAll("button")[1];

menuTab.addEventListener("click",generateMenuPage)