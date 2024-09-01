import { setWaifuBackground } from "./pageLoad.js";
import { generateHomePageContent } from "./homePage.js";
import { generateMenuPage } from "./menu.js";
setWaifuBackground();
generateHomePageContent();

// grab tabs
const homeTab = document.querySelectorAll("button")[0]
const menuTab = document.querySelectorAll("button")[1];

menuTab.addEventListener("click",generateMenuPage)
homeTab.addEventListener("click",generateHomePageContent)