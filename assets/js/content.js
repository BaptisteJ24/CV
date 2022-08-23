import("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");

class formationClass {

    constructor(name, startDate, endDate, lieu, description, othersDetails, theme, option, mention) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.lieu = lieu;
        this.description = description;
        this.othersDetails = othersDetails;
        this.theme = theme;
        this.option = option;
        this.mention = mention;
    }
}

let openClassrooms = new formationClass("Développeur d'application JavaScript React", 2022, "present", "OpenClassrooms", "Créer des sites webs statiques en HTML/CSS et dynamiques en JavaScript React. Utilisation d’API. Mise en oeuvre de tests unitaires et débogage du code. Résolutions de problèmes et algorithmie. Modernisation et optimisation du code.", "RNCP, diplôme de niveau 6 (bac+3/+4)", "Informatique", "", "");

let licencePsy = new formationClass("Licence de Science Humaine et Sociale", 2018, 2022, "Université d'Angers, UFR LLSH, Angers", "", "", "Psychologie", "", "assez bien");

let btsSIO = new formationClass("BTS Services Informatiques aux Organisations, Solutions Logicielles et Applications Métiers", 2016, 2018, "Lycée Chevrollier, Angers", "", "", "Informatique", "mathéématiques approfondies", "");

let bacES = new formationClass("Baccalauréat Économique et Social", 2014, 2016, "Lycée Saint-Michel, Château-Gontier", "", "", "Économie et social", "mathématiques", "");

let formationTable = [openClassrooms, licencePsy, btsSIO, bacES];


function LoadFormationContent() {
    for (formationClass in formationTable) {
        let formation = document.createElement('li');
        formation.setAttribute('class', 'formationStyles');
        formation.innerHTML += "<h3>" + formationTable[formationClass].startDate + "-" + formationTable[formationClass].endDate + "</h3>";
        formation.innerHTML += "</br><h2>" + formationTable[formationClass].name +"</h2>";
        formation.innerHTML += "</br><h3>" + formationTable[formationClass].description + "</h3>";
        document.getElementById('FormationTable').append(formation);
    }
}








LoadFormationContent();