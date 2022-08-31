import("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");

class formationClass {

    constructor(name, startDate, endDate, place, description, othersDetails, theme, option, mention, images) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.place = place;
        this.description = description;
        this.othersDetails = othersDetails;
        this.theme = theme;
        this.option = option;
        this.mention = mention;
        this.images = images;
    }
}

let openClassrooms = new formationClass(
    "Formation Développeur d'application JavaScript React",
    2022,
    "présent",
    "OpenClassrooms",
    "Créer des sites web statiques en HTML/CSS et dynamiques en JavaScript React. Utilisation d’API. Mise en oeuvre de tests unitaires et débogage du code. Résolutions de problèmes et algorithmie. Modernisation et optimisation du code.",
    "RNCP, diplôme de niveau 6 (bac+3/+4)",
    "Informatique",
    null,
    null,
    "logo_Laptop"
);

let licencePsy = new formationClass(
    "Licence de Science Humaine et Sociale",
    2018,
    2022,
    "Université d'Angers, UFR LLSH, Angers",
    null,
    null,
    "Psychologie",
    null,
    "assez bien",
    "logo_Psychology"
);

let btsSIO = new formationClass(
    "BTS Services Informatiques aux Organisations, Solutions Logicielles et Applications Métiers",
    2016,
    2018,
    "Lycée Chevrollier, Angers",
    null,
    null,
    "Informatique",
    "mathématiques approfondies",
    null,
    "logo_Laptop"
);

let bacES = new formationClass(
    "Baccalauréat Économique et Social",
    2014, 2016,
    "Lycée Saint-Michel, Château-Gontier",
    null,
    null,
    "Économie et social",
    "mathématiques",
    null,
    "logo_ses"
);


let formationTable = [openClassrooms, licencePsy, btsSIO, bacES];

function LoadFormationContent() {
    var i = 0;
    for (formationClass in formationTable) {

        let divFormation = document.createElement('div');
        divFormation.setAttribute('class', 'div_Experience_Container');
        divFormation.setAttribute('id', 'divFormation' + i);

        let divDate = document.createElement('div');
        divDate.setAttribute('class', 'div_Date');
        divDate.setAttribute('id', 'div_Date_Formation' + i);

        let divDateText = document.createElement('div');
        divDateText.setAttribute('class', 'div_Date_Text');
        divDateText.setAttribute('id', 'div_DateText_Formation' + i);

        let divImages = document.createElement('div');
        divImages.setAttribute('class', 'div_Images');
        divImages.setAttribute('id', 'div_Images_Formation' + i);

        let divText = document.createElement('div');
        divText.setAttribute('class', 'div_Text');
        divText.setAttribute('id', 'div_Text_Formation' + i);

        let formationDate = document.createElement('h3');
        formationDate.innerHTML += formationTable[formationClass].startDate + "-" + formationTable[formationClass].endDate;

        let formationName = document.createElement('h2');
        formationName.innerHTML += formationTable[formationClass].theme + ", " + formationTable[formationClass].name;

        if (formationTable[formationClass].mention !== null) {
            formationName.innerHTML += ", mention " + formationTable[formationClass].mention;
        }
        if (formationTable[formationClass].option !== null) {
            formationName.innerHTML += ", option " + formationTable[formationClass].option;
        }

        let formationPlace = document.createElement('h3');
        formationPlace.setAttribute('class', 'place');
        formationPlace.innerHTML += formationTable[formationClass].place;

        if (formationTable[formationClass].othersDetails !== null) {
            formationPlace.innerHTML += ", " + formationTable[formationClass].othersDetails;
        }

        let formationDescription = document.createElement('h3');
        if (formationTable[formationClass].description !== null) {
            formationDescription.innerHTML += formationTable[formationClass].description;
        }


        let formationImages = document.createElement('img');
        formationImages.setAttribute('src', '../assets/png/' + formationTable[formationClass].images + '.png');
        formationImages.setAttribute('class', 'images_Content');


        function appendFormationContent() {
            document.getElementById('formation_Table').append(divFormation);
            document.getElementById('divFormation' + i).append(divImages, divDateText);
            document.getElementById('div_DateText_Formation' + i).append(divDate, divText);
            document.getElementById('div_Date_Formation' + i).append(formationDate);
            document.getElementById('div_Images_Formation' + i).append(formationImages);
            document.getElementById('div_Text_Formation' + i).append(formationName, formationPlace, formationDescription);
        }

        appendFormationContent();
        i++
    }
}
/* On active la fonction d'import de Formation */
LoadFormationContent();


class experienceProClass {

    constructor(name, startDate, endDate, place, description, theme, images, dev, fonction) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.place = place;
        this.description = description;
        this.theme = theme;
        this.images = images;
        this.dev = dev;
        this.fonction = fonction;
    }
}


let Octave = new experienceProClass(
    "Développeur Web",
    "01/2018",
    "03/2018",
    "Octave, Angers",
    "Refonte de la partie administrations des sites internet de l'entreprise. Utilisation des langages HTML, CSS, PHP, AngularJS et SQL. Méthode AGILE",
    "Informatique",
    "logo_Laptop",
    true,
    "Stagiaire"
);

let stMichel = new experienceProClass(
    "Développeur Web",
    "01/2017",
    "02/2017",
    "Lycée Saint-Michel, Château-Gontier-sur-Mayenne",
    "Développement d'une application web destinée à l'administration du lycée. Utilisation des langages HTML, CSS, PHP et SQL",
    "Informatique",
    "logo_Laptop", true,
    "Stagiaire"
);

let PsyEN = new experienceProClass(
    "Psychologue de l'Éducation Nationale",
    "01/2022",
    "03/2022",
    "CIO Mayenne Sud, Laval",
    "Observation et participation à des entretiens individuels. Cotation de tests psychométriques",
    "Psychologie",
    "logo_Psychology",
    false,
    "Stagiaire"
);

let MLAC = new experienceProClass(
    "Médiateur de Lutte Anti-Covid",
    "08/2021",
    "12/2021",
    "Protection Civile du Maine et Loire, Sainte-Gemme-Sur-Loire",
    "Tests antigéniques tout public. Accueil administratif, prélèvements, analyse de tests, rendu de résultats. Accompagnement, prévention et sensibilisation.",
    "Santé",
    "logo_MLAC",
    false,
    "Intérimaire"
);

let agentTechFL = new experienceProClass(
    "Agent Technique, Service Fête et Logistique",
    "07/2019",
    "08/2019",
    "Communauté de Communes du Pays de Château-Gontier, Château-Gontier-Sur-Mayenne",
    "Manutention, Préparation des installations pour des événements (gradins, barnums, tentes). Montage et démontage du matériel lors des manifestations",
    "Logistique et évènementiel",
    "logo_Handling",
    false,
    "Saisonnier"
);

let agentCollDechet = new experienceProClass(
    "Agent de collecte des ordures ménagères",
    "07/2018",
    "08/2018",
    "Communauté de Communes du Pays de Château-Gontier, Château-Gontier sur Mayenne",
    "Collecte des ordures ménagères",
    "Environnement, Hygiène",
    "logo_BinLorry",
    false,
    "Saisonnier"
);


let experienceProTable = [PsyEN, MLAC, agentTechFL, agentCollDechet, Octave, stMichel];

function LoadExperienceProContent() {
    var i = 0;
    for (experienceProClass in experienceProTable) {
        let divExperiencePro = document.createElement('div');
        divExperiencePro.setAttribute('class', 'div_Experience_Container');
        divExperiencePro.setAttribute('id', 'divExperiencePro' + i);

        let divDate = document.createElement('div');
        divDate.setAttribute('class', 'div_Date');
        divDate.setAttribute('id', 'div_Date_ExperiencePro' + i);

        let divDateText = document.createElement('div');
        divDateText.setAttribute('class', 'div_Date_Text');
        divDateText.setAttribute('id', 'div_DateText_ExperiencePro' + i);

        let divImages = document.createElement('div');
        divImages.setAttribute('class', 'div_Images');
        divImages.setAttribute('id', 'div_Images_ExperiencePro' + i);

        let divText = document.createElement('div');
        divText.setAttribute('class', 'div_Text');
        divText.setAttribute('id', 'div_Text_ExperiencePro' + i);


        let experienceProDate = document.createElement('h3');
        experienceProDate.innerHTML += experienceProTable[experienceProClass].startDate + "- <br/>" + experienceProTable[experienceProClass].endDate;

        let experienceProName = document.createElement('h2');
        experienceProName.innerHTML += experienceProTable[experienceProClass].theme + ", " + experienceProTable[experienceProClass].fonction + ", " + experienceProTable[experienceProClass].name

        let experienceProPlace = document.createElement('h3');
        experienceProPlace.setAttribute('class', 'place');
        experienceProPlace.innerHTML += experienceProTable[experienceProClass].place;

        let experienceProDescription = document.createElement('h3');
        experienceProDescription.innerHTML += experienceProTable[experienceProClass].description;

        let experienceProImages = document.createElement('img')
        experienceProImages.setAttribute('src', '../assets/png/' + experienceProTable[experienceProClass].images + '.png');
        experienceProImages.setAttribute('class', 'images_Content');


        function appendExperienceContent() {

            if (experienceProTable[experienceProClass].dev === true) {

                document.getElementById('experienceProDev_Table').append(divExperiencePro);
                document.getElementById('divExperiencePro' + i).append(divImages, divDateText);
                document.getElementById('div_DateText_ExperiencePro' + i).append(divDate, divText);
                document.getElementById('div_Date_ExperiencePro' + i).append(experienceProDate);
                document.getElementById('div_Images_ExperiencePro' + i).append(experienceProImages);
                document.getElementById('div_Text_ExperiencePro' + i).append(experienceProName, experienceProPlace, experienceProDescription);
            }
            else{
                document.getElementById('experienceProOthers_Table').append(divExperiencePro);
                document.getElementById('divExperiencePro' + i).append(divImages, divDateText);
                document.getElementById('div_DateText_ExperiencePro' + i).append(divDate, divText);
                document.getElementById('div_Date_ExperiencePro' + i).append(experienceProDate);
                document.getElementById('div_Images_ExperiencePro' + i).append(experienceProImages);
                document.getElementById('div_Text_ExperiencePro' + i).append(experienceProName, experienceProPlace, experienceProDescription);
            }
        }

        appendExperienceContent();
        i++
    }
}

LoadExperienceProContent();