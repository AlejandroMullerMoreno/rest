function generateHomePageContent(){
    // grab div#content
    const mainContent = document.getElementById("content");

    // create div
    let homePageMainContent = document.createElement("div");
    console.log(homePageMainContent);

    // add content/styling
    homePageMainContent.innerHTML= "This is test content. Nay, this IS content. Indeed, one might think that just becuase they say this or they say that that this isn't VALUE. Let me teach you how the world work, kid- entertainment and information are one and the same in the 21st century. Indeed, for better or for worse! You would be wise to remember that, my child. Now go... I have to read a Murakami novel....";
    homePageMainContent.id="contentSection";
    homePageMainContent.style.backgroundColor="#00308F";
    homePageMainContent.style.color="white";
    homePageMainContent.style.width="50vw";
    homePageMainContent.style.height="75vh";
    homePageMainContent.style.zIndex="1";
    homePageMainContent.style.position="absolute";
    homePageMainContent.style.top="100px";
    homePageMainContent.style.left="25vw";
    // homePageMainContent.style.display="flexbox";
    // homePageMainContent.style.justifyContent="center";
    // homePageMainContent.style.marginBottom="1000px";

    // append the div to the homepage
    mainContent.appendChild(homePageMainContent);

}

export {generateHomePageContent};



