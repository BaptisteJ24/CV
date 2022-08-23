import("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");

let logo_OpenClassrooms = "<img src=\"../assets/png/logo_OpenClassrooms.png\">";

var logoName = {
    "OpenClassrooms": "logo_OpenClassrooms",
    "UnivAngers": "logo_ua",
    "Chevrollier": "logo_chevrollier",
    "StMichel": "logo_stmichel"
};

class formationClass {

    constructor(name, startDate, endDate, lieu, description, othersDetails, theme, option, mention, image) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.lieu = lieu;
        this.description = description;
        this.othersDetails = othersDetails;
        this.theme = theme;
        this.option = option;
        this.mention = mention;
        this.image = image;
    }
}

console.log(logoName[2]);

let openClassrooms = new formationClass("Développeur d'application JavaScript React", 2022, "present", "OpenClassrooms", "Créer des sites webs statiques en HTML/CSS et dynamiques en JavaScript React. Utilisation d’API. Mise en oeuvre de tests unitaires et débogage du code. Résolutions de problèmes et algorithmie. Modernisation et optimisation du code.", "RNCP, diplôme de niveau 6 (bac+3/+4)", "Informatique", "", "", logoName["OpenClassrooms"]);

let licencePsy = new formationClass("Licence de Science Humaine et Sociale", 2018, 2022, "Université d'Angers, UFR LLSH, Angers", "", "", "Psychologie", "", "assez bien", logoName["UnivAngers"]);

let btsSIO = new formationClass("BTS Services Informatiques aux Organisations, Solutions Logicielles et Applications Métiers", 2016, 2018, "Lycée Chevrollier, Angers", "", "", "Informatique", "mathéématiques approfondies", "", logoName["Chevrollier"]);

let bacES = new formationClass("Baccalauréat Économique et Social", 2014, 2016, "Lycée Saint-Michel, Château-Gontier", "", "", "Économie et social", "mathématiques", "", logoName["StMichel"]);


let formationTable = [openClassrooms, licencePsy, btsSIO, bacES];

function LoadFormationContent() {
    var i = 0;
    for (formationClass in formationTable) {
        let liFormation = document.createElement('li');
        liFormation.setAttribute('id','liFormation'+i);

        let divLeft = document.createElement('div');
        divLeft.setAttribute('id','divLeft'+i)
        divLeft.setAttribute('class','divLeft')

        let divRight = document.createElement('div');
        divRight.setAttribute('id','divRight'+i);
        divRight.setAttribute('class','divRight');

        let divRightRight = document.createElement('div');
        divRightRight.setAttribute('id','divRightRight'+i),('class','divRightRight');

        let divRightLeft = document.createElement('div');
        divRightLeft.setAttribute('id','divRightLeft'+i);
        divRightLeft.setAttribute('class','divRightLeft');

        /* Affiche la date de la Formation */
        let formationDate = document.createElement('h3');
        formationDate.innerHTML += formationTable[formationClass].startDate + "-" + formationTable[formationClass].endDate;
        /*Affiche le nom de la formation*/
        let formationName = document.createElement('h2');
        formationName.innerHTML += formationTable[formationClass].theme + ", " + formationTable[formationClass].name

        let formationDescription = document.createElement('h3');
        formationDescription.innerHTML += formationTable[formationClass].description;

        let formationImage = document.createElement('img')
        formationImage.setAttribute('src', '../assets/png/' + formationTable[formationClass].image + '.png');
        /*formationImage.setAttribute('class', 'articleContent_Image')*/

        document.getElementById('FormationTable').append(liFormation);
        document.getElementById('liFormation'+i).append(divLeft, divRight);
        document.getElementById('divLeft'+i).append(formationDate);
        document.getElementById('divRight'+i).append(divRightLeft,divRightRight);
        document.getElementById('divRightLeft'+i).append(formationImage);
        document.getElementById('divRightRight'+i).append(formationName , formationDescription);
        i++
    }
}

LoadFormationContent();