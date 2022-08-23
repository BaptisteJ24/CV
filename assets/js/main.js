var formationLink = document.getElementById("formation_Link");
var experienceProLink = document.getElementById("experiencePro_Link")
var formationContent = document.getElementById("formationContent");
var experienceProContent = document.getElementById("experienceProContent");
experienceProContent.hidden = true;

formationLink.onclick = function() {FormationContentDisplay()};
experienceProLink.onclick = function () {ExperienceProContentDisplay()};

function FormationContentDisplay () {
    experienceProContent.hidden = true;
    formationContent.hidden = false;
}

function ExperienceProContentDisplay (){
    experienceProContent.hidden = false;
    formationContent.hidden = true;
}