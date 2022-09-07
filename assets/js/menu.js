import("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js")

var main_Details = document.getElementById('mainDetails');

var menu_Container = document.createElement('nav');
menu_Container.setAttribute('class','menu');
menu_Container.setAttribute('id','page__menu');
menu_Container.setAttribute('name','page__menu');

menu_List = document.createElement('ul');
menu_List.setAttribute('class','menu__list r-list');

var liens_menus = {
    "index.html": "Présentation",
    "skills.html": "Compétences",
    "experience.html": "Formations et Expériences Professionnelles",
    "propos.html": "A Propos",
    "projects.html": "Projets",
};



main_Details.after(menu_Container);
document.getElementById('page__menu').append(menu_List);


for(var i in liens_menus){
    let menu = document.createElement('a');
    menu.setAttribute('href', i)
    menu.setAttribute('class', "menu__link r-link text-underlined")
    menu.innerHTML = liens_menus[i]
    document.getElementById('page__menu').append(menu)
}




		
	