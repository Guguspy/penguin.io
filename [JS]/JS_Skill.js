document.getElementById("background_SKILLS_id").onclick = function() {
	var IdClassToChange =  document.getElementById('background_SKILLS_id').className

    if (IdClassToChange== "background_SKILLS") {
    	document.getElementById('background_SKILLS_id').classList.remove("background_SKILLS");
    	document.getElementById('background_SKILLS_id').classList.add("background_SKILLS_no_animation");
 	}else if (IdClassToChange== "background_SKILLS_no_animation"){
 		document.getElementById('background_SKILLS_id').classList.remove("background_SKILLS_no_animation");
    	document.getElementById('background_SKILLS_id').classList.add("background_SKILLS");
 	}


    
}




document.getElementById("SKILLS_id").onclick = function() {
	var IdClassToChange =  document.getElementById('SKILLS_id').className

    if (IdClassToChange== "SKILLS") {
    	document.getElementById('SKILLS_id').classList.remove("SKILLS");
    	document.getElementById('SKILLS_id').classList.add("SKILLS_no_animation");
 	}else if (IdClassToChange== "SKILLS_no_animation"){
 		document.getElementById('SKILLS_id').classList.remove("SKILLS_no_animation");
    	document.getElementById('SKILLS_id').classList.add("SKILLS");
 	}


    
}

