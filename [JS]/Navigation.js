

document.getElementById("logo_id").onclick = function() {
    document.getElementById("background_socialmedia_id").style.display = "block";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "none";

    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
}


document.getElementById("HOME_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "block";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "none";


    var ClassToChange =  document.getElementById('HOME_NAVBAR_id').className
    if (ClassToChange == "HOME_NAVBAR") {
        document.getElementById('HOME_NAVBAR_id').classList.add("active_navbar");
    }
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
    
}


document.getElementById("BTS_SIO_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "block";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "none";


    var ClassToChange =  document.getElementById('BTS_SIO_NAVBAR_id').className
    if (ClassToChange == "BTS_SIO_NAVBAR") {
        document.getElementById('BTS_SIO_NAVBAR_id').classList.add("active_navbar");
    }
    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
}


document.getElementById("VEILLE_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "block";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "none";


    var ClassToChange =  document.getElementById('VEILLE_NAVBAR_id').className
    if (ClassToChange == "VEILLE_NAVBAR") {
        document.getElementById('VEILLE_NAVBAR_id').classList.add("active_navbar");
    }
    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
}


document.getElementById("PROJETS_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "block";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "none";


    var ClassToChange =  document.getElementById('PROJETS_NAVBAR_id').className
    if (ClassToChange == "PROJETS_NAVBAR") {
        document.getElementById('PROJETS_NAVBAR_id').classList.add("active_navbar");
    }
    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
}


document.getElementById("SKILLS_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "block";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "none";


    var ClassToChange =  document.getElementById('SKILLS_NAVBAR_id').className
    if (ClassToChange == "SKILLS_NAVBAR") {
        document.getElementById('SKILLS_NAVBAR_id').classList.add("active_navbar");
    }
    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
}


document.getElementById("INFO_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "block";
    document.getElementById("background_CONTACT_id").style.display = "none";


    var ClassToChange =  document.getElementById('INFO_NAVBAR_id').className
    if (ClassToChange == "INFO_NAVBAR") {
        document.getElementById('INFO_NAVBAR_id').classList.add("active_navbar");
    }
    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
}


document.getElementById("CONTACT_NAVBAR_id").onclick = function() {
	document.getElementById("background_socialmedia_id").style.display = "none";
    document.getElementById("background_card_id").style.display = "none";
    document.getElementById("background_BTS_id").style.display = "none";
    document.getElementById("background_VEILLE_id").style.display = "none";
    document.getElementById("background_PROJETS_id").style.display = "none";
    document.getElementById("background_SKILLS_id").style.display = "none";
    document.getElementById("background_INFO_id").style.display = "none";
    document.getElementById("background_CONTACT_id").style.display = "block";

    document.getElementById('HOME_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('BTS_SIO_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('VEILLE_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('PROJETS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('SKILLS_NAVBAR_id').classList.remove("active_navbar");
    document.getElementById('INFO_NAVBAR_id').classList.remove("active_navbar");
}


