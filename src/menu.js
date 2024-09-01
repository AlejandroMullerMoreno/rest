function generateMenuPage(){
    // grab div#content
    const mainContent = document.getElementById("content");

    // create div
    let menuPageMainContent = document.createElement("div");

    // add content/styling
    menuPageMainContent.innerHTML= "You want some sloppy sloppy joe aintcha, lad?";
    menuPageMainContent.id="contentSection";
    menuPageMainContent.style.backgroundColor="#00308F";
    menuPageMainContent.style.color="white";
    menuPageMainContent.style.width="50vw";
    menuPageMainContent.style.height="75vh";
    menuPageMainContent.style.zIndex="1";
    menuPageMainContent.style.position="absolute";
    menuPageMainContent.style.top="100px";
    menuPageMainContent.style.left="25vw";
    // homePageMainContent.style.display="flexbox";
    // homePageMainContent.style.justifyContent="center";
    // homePageMainContent.style.marginBottom="1000px";

    // append the div to the homepage
    mainContent.appendChild(menuPageMainContent);

}

export {generateMenuPage};