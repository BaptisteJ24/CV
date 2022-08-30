import("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");

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

let openClassrooms = new formationClass("Développeur d'application JavaScript React", 2022, "present", "OpenClassrooms", "Créer des sites webs statiques en HTML/CSS et dynamiques en JavaScript React. Utilisation d’API. Mise en oeuvre de tests unitaires et débogage du code. Résolutions de problèmes et algorithmie. Modernisation et optimisation du code.", "RNCP, diplôme de niveau 6 (bac+3/+4)", "Informatique", "", "", logoName["OpenClassrooms"]);
let licencePsy = new formationClass("Licence de Science Humaine et Sociale", 2018, 2022, "Université d'Angers, UFR LLSH, Angers", "", "", "Psychologie", "", "assez bien", logoName["UnivAngers"]);
let btsSIO = new formationClass("BTS Services Informatiques aux Organisations, Solutions Logicielles et Applications Métiers", 2016, 2018, "Lycée Chevrollier, Angers", "", "", "Informatique", "mathéématiques approfondies", "", logoName["Chevrollier"]);
let bacES = new formationClass("Baccalauréat Économique et Social", 2014, 2016, "Lycée Saint-Michel, Château-Gontier", "", "", "Économie et social", "mathématiques", "", logoName["StMichel"]);


let formationTable = [openClassrooms, licencePsy, btsSIO, bacES];

function LoadFormationContent() {
    var i = 0;
    for (formationClass in formationTable) {
        let divFormation = document.createElement('div');
        divFormation.setAttribute('class','div_Experience_Container');
        divFormation.setAttribute('id','divFormation'+i);

        let divDate = document.createElement('div');
        divDate.setAttribute('class','div_Date');
        divDate.setAttribute('id', 'div_Date_Formation'+i);

        let divImageText = document.createElement('div');
        divImageText.setAttribute('class','div_Image_Text');
        divImageText.setAttribute('id', 'div_ImageText_Formation'+i);

        let divImages = document.createElement('div');
        divImages.setAttribute('class','div_Images');
        divImages.setAttribute('id', 'div_Images_Formation'+i);

        let divText = document.createElement('div');
        divText.setAttribute('class','div_Text');
        divText.setAttribute('id', 'div_Text_Formation'+i);

        /* Affiche la date de la Formation */
        let formationDate = document.createElement('h3');
        formationDate.innerHTML += formationTable[formationClass].startDate + "-" + formationTable[formationClass].endDate;
        /*Affiche le nom de la formation*/
        let formationName = document.createElement('h2');
        formationName.innerHTML += formationTable[formationClass].theme + ", " + formationTable[formationClass].name
        /*Affiche la description de la formation*/
        let formationDescription = document.createElement('h3');
        formationDescription.innerHTML += formationTable[formationClass].description;
        /* Affiche l'image de la formation*/
        let formationImage = document.createElement('img')
        formationImage.setAttribute('src', '../assets/png/' + formationTable[formationClass].image + '.png');
        formationImage.setAttribute('class','image_Content');

        /*On importe les données dans le document */

        /*Création des lignes du tableau*/
        document.getElementById('formationTable').append(divFormation); 

        /*Création des div date et ImageText dans des lignes*/
        document.getElementById('divFormation'+i).append(divDate,divImageText);

        /*Création de l'élément date dans la div Date*/
        document.getElementById('div_Date_Formation'+i).append(formationDate);

        /*Création des div Image et Text dans la div ImageText*/
        document.getElementById('div_ImageText_Formation'+i).append(divImages,divText); 

        /*Création de l'élément image dans la div Image */
        document.getElementById('div_Images_Formation'+i).append(formationImage);

        /*Création de l'élément Text dans la div Text */
        document.getElementById('div_Text_Formation'+i).append(formationName,formationDescription);
        i++
    }
}
/* On active la fonction d'import de Formation */
LoadFormationContent();



class experienceClass {

    constructor(name, startDate, endDate, lieu, description, theme, image, dev, fonction) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.lieu = lieu;
        this.description = description;
        this.theme = theme;
        this.image = image;
        this.dev = dev;
        this.fonction = fonction;
    }
}


let Octave = new experienceClass("Stagiaire en développement web", "01/2018","03/2018", "Octave, Angers","Refonte de la partie administrations des sites internet de l'entreprise. Utilisation des langages HTML, CSS, PHP, AngularJS et SQL. Méthode AGILE", "Informatique", "", true, "Stagiaire");
let stMichel = new experienceClass("Stagiaire en développement web","01/2017","02/2017", "Lycée Saint-Michel, Château-Gontier-sur-Mayenne","Développement d'une application web destinée à l'administration du lycée. Utilisation des langages HTML, CSS, PHP et SQL", "Informatique",logoName["StMichel"],true, "Stagiaire");
let PsyEN = new experienceClass("Stagiaire auprès d'un Psychologue de l'Éducation Nationale","01/2022","03/2022","CIO Mayenne Sud, Laval", "Observation et participation à des entretiens individuels. Cotation de tests psychométriques", "Sciences Humaines et Sociales, Psychologie","",false,"Stagiaire");
let MLAC = new experienceClass("Médiateur de Lutte Anti-Covid", "08/2021","12/2021","Protection Civile du Maine et Loire, Sainte-Gemme-Sur-Loire", "Tests antigéniques tout public. Accueil administratif, prélèvements, analyse de tests, rendu de résultats. Accompagnement, prévention et sensibilisation.", "Santé","",false,"Intérimaire");
let agentTechFL = new experienceClass("Agent Technique, Service Fête et Logistique", "07/2019","08/2019","Communauté de Communes du Pays de Château-Gontier, Château-Gontier-Sur-Mayenne","Manutention, Préparation des installations pour des événements (gradins, barnums, tentes). Montage et démontage du matériel lors des manifestations","Logistique et évènementiel","",false,"Saisonnier");
let agentCollDechet = new experienceClass("Agent de collecte des ordures ménagères", "07/2018","08/2018","Communauté de Communes du Pays de Château-Gontier, Château-Gontier sur Mayenne","Collecte des ordures ménagères","Environnement, Hygiène","",false,"Saisonnier");


