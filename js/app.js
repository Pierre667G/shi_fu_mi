let ciseaux = document.getElementById("c")
let pierre = document.getElementById("p")
let feuille = document.getElementById("f")
let ciseaux3 = ciseaux.addEventListener("click",()=>{})
let pierre3 = pierre.addEventListener("click",()=>{})
let feuille3 = feuille.addEventListener("click",()=>{})
let ciseaux4= ciseaux2.addEventListener("click",()=>{})
let pierre4= pierre2.addEventListener("click",()=>{})
let feuille4 = feuille2.addEventListener("click",()=>{})
let victoire = document.createElement("p")
let b = document.body;
victoire.textContent = "vouz avez gagner"
let jeu = document.createElement("button")
jeu.textContent = "commencer"
b.prepend(jeu)
let egalité = document.createElement("p")
egalité.textContent = "égalité"

let perdu = document.createElement("p")
perdu.textContent = "perdu"
