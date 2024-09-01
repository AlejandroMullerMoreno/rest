function generateHomePageContent(){
    // grab div#content
    const mainContent = document.getElementById("content");

    // create div
    let homePageMainContent = document.createElement("div");
    console.log(homePageMainContent);

    // add content/styling
    homePageMainContent.innerHTML= "This is test content";
    homePageMainContent.id="contentSection";
    homePageMainContent.style.backgroundColor="#00308F";
    homePageMainContent.style.color="white";
    homePageMainContent.style.width="50vw";
    homePageMainContent.style.zIndex="1";
    homePageMainContent.style.display="flexbox";
    homePageMainContent.style.justifyContent="center";

    // append the div to the homepage
    mainContent.appendChild(homePageMainContent);

}

export {generateHomePageContent};



