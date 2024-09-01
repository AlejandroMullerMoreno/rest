function generateAboutPage(){
    // grab div#content
    const mainContent = document.getElementById("content");

    // create div
    let aboutPageMainContent = document.createElement("div");

    // add content/styling
    aboutPageMainContent.innerHTML= "Do you mess with Being?";
    aboutPageMainContent.id="contentSection";
    aboutPageMainContent.style.backgroundColor="#00308F";
    aboutPageMainContent.style.color="white";
    aboutPageMainContent.style.width="50vw";
    aboutPageMainContent.style.height="75vh";
    aboutPageMainContent.style.zIndex="1";
    aboutPageMainContent.style.position="absolute";
    aboutPageMainContent.style.top="100px";
    aboutPageMainContent.style.left="25vw";
    // homePageMainContent.style.display="flexbox";
    // homePageMainContent.style.justifyContent="center";
    // homePageMainContent.style.marginBottom="1000px";

    // append the div to the homepage
    mainContent.appendChild(aboutPageMainContent);

}

export {generateAboutPage};