import("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js")
var menu_container = document.getElementById("menu");
var liens_menus = {
    "index.html": "Accueil",
    "skills.html": "Compétences",
    "experience.html": "Formations et Expériences Professionnelles",
    "propos.html": "A Propos",
    "projects.html": "Projets",
};

menu_container.innerHTML +='<nav class="menu" id="page__menu" name="page__menu"><ul class="menu__list r-list">';

for(var i in liens_menus){
    let menu = document.createElement('a');
    menu.setAttribute('href', i)
    menu.setAttribute('class', "menu__link r-link text-underlined")
    menu.innerHTML = liens_menus[i]
    document.getElementById('page__menu').append(menu)
}




		
	