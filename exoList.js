const userlist = [
    {id: 1, prenom: "James", age: 41, role: "utilisateur"},
    {id: 2, prenom: "Gustavo", age: 21, role: "administrateur"},
    {id: 3, prenom: "Hermione", age: 25, role: "utilisateur"},
    {id: 4, prenom: "Harry", age: 27, role: "utilisateur"},
]

let list = document.getElementById("usersList");
userlist.map(user => {
    // je crée une variable à chaque tour de boucle 
    // qui sera un nouvel element html ol (liste ordonnée)
    let newOl = document.createElement("ol");
    // je crée une condition pour varier les couleurs selon le role
    if (user.role == "administrateur"){
        newOl.style.color = "red";
    } else {
        newOl.style.color = "blue";
    }
    
    // j'ajoute le text à l'élément crée avec un template string
    newOl.textContent = 
        `ID: ${user.id};
        Prénom: ${user.prenom};
        Age: ${user.age};
        Role: ${user.role}`;
    // enfin j'ajoute cet élément à la variable qui fait appelle à la div.
    list.appendChild(newOl);
    newOl.addEventListener('mouseenter', event => {
        newOl.style.backgroundColor = "lightgray";
    });
    newOl.addEventListener('mouseleave', event => {
        newOl.style.backgroundColor = "white";
    });
    const btn = document.createElement("BUTTON")
    const txt = document.createTextNode("Supprimer")
    btn.appendChild(txt);
    document.body.appendChild(btn); 
    btn.addEventListener('click', event => {newOl.style.display = "none"; btn.style.display = "none"});
        
    // enfin j'ajoute cet élément à la variable qui fait appelle à la div.
    newOl.appendChild(btn); 
    list.appendChild(newOl); 


});

function getValue(){
    //selectionner l'element input et recuperer sa valeur
    var prenom = document.getElementById("forPrenom").value;
    var age = document.getElementById("forAge").value; 
    var role = document.getElementById("forRole").value; 
    var donne= prenom + age + role;

    //userlist.push = {"prenom": prenom, "age": age,"role":role};
    //console.log(userlist)

    // afficher la valeur
    alert(donne);
}
list.innerHTML += donne;
//newOl.appendChild(monInput);
//list.appendChild(newOl); 

function resetForm() {
    document.getElementById("formulaire").reset(); 
};


let myForm = document.getElementById('formulaire');
myForm.addEventListener('submit')

// function valider (event) {
//     // code a exécuter lorsque le formulaire sera validé
//     for (var i=0; i<userlist.length; i++) {
//         var e = userlist[i];
//     }
// }

/* ajoute l’événement */
// form_formulaire.addEventListener('submit', valider);
// event.preventDefault();
// var champ_prenom = form_formulaire.elements["forPrenom"];
// var champ_age = form_formulaire.elements["forAge"];
// var champ_role = form_formulaire.elements["forRole"];

// const champ = userlist.push(donne);
    
// document.addEventListener("click", function (event) {
//     event.preventDefault();

// // Récupérer l'élément "form" dans la page HTML
// let formData = document.querySelector("#valeurs");
// // Ajouter l'écoute de l'événement "submit" à l'élément formulaire.
// // Lorsque cet événement surviendra, la fonction getInfos sera appelée
// formData.addEventListener("submit", getInfos);
// // Récupérer le champ qui servira à afficher le calcul
// let result = document.querySelector("#js-result");
// function getInfos(e){
//     // Empêcher le chargement de le page qui se produit par défaut lors
//     // d'un événement "Submit"
//     e.preventDefault();
//     // Récupérer la valeur du formulaire contenue dans le champ valeur 1
//     let val1 = parseInt(document.querySelector("#js-valeur-un").value);
//     // Récupérer la valeur du formulaire contenue dans le champ valeur 2
//     let val2 = parseInt(document.querySelector("#js-valeur-deux").value);
//     //Aficher le résultat du calcul dans le champ l'élément "result"
//     result.value = val1 + val2;
// }
// alert (result);