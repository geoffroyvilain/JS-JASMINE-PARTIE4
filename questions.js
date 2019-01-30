/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
 // (texte) représente la chaîne de caractères dans un autre fichier

//  DONNER LA TAILLE DE LA CHAINE DE CARACTERE, on utilise x.length
var tailleString = function (texte) {
    return texte.length;
}
//  REMPLACER LE PREMIER e DE LA CHAINE DE CARACTERE PAR UN ESPACE? ON UTILISE .replace(caractère ciblé, caractère de remplacement)
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
//  CONCATAINER 2 CHAINES DE CARACTERES
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
//  AFFICHER LE 5EME CARACTERE DE LA CHAINE; On utilise x.charAt(position de la lettre-1)
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
//  AFFICHER LES 9 PREMIERS CARFACTERES; On utilise x.substring(position de la 1ere lettre, position de la 2ème)
var afficher9Car = function (texte) {
    return texte.substring(0,9);
}
//  x.toUpperCase : Mettre les caractères en majuscule
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
//  x.toUpperCase : Mettre les caractères en minuscule
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
//SUPPRIMER LES ESPACES AVANT ET APRÈS LA CHAINE
var SupprEspaceString = function (texte) {
    return texte.replace(/^\s+|\s+$/g,'');
}
//AFFICHER TRUE SI LE PARAMETRE D ENTREE DE LA FONTION EST DE TYPE string
var IsString = function (texte) {
  //SI LE TYPE DE (TEXTE) EST EGAL A 'STRING' ALORS RETOUNE TRUE SINON FALSE
    if(typeof(texte) == 'string'){
    return true
  }else{
    return false
  }
}
//EXTRAIRE L EXTENSION D UN FICHIER : split(.);pop() pour resortir l'extension d'un fichier

var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
//   CALCULER LE NOMBRE D'ESPACE DANS UN TEXTE : On utilise x.split('valeur').length -1
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
//INVERSER LES CARACTERES D UNE CHAINE : // OPTIMIZE: On utilise x.split('').reverse().join()('')
//join pour relier les caractères sinon un espace entre chaque caractere
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
//  CALCULER LE CARRE (ICI x ETANT LE NOMBRE ET y LA PUISSANCE) : On utilise Math.pow(valeur1,valeur de l'exposant)(pow pour puissance)
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
// RESSORTIE LA VALEUR ABS D UN NOMBRE : Math.abs(valeur)
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
//afficher les valeurs absolues de plusieurs nombres
var valeurAbsolueArray = function (array) {
  for(var i=0; i<array.length; i++) {
    array[i] =  Math.abs(array[i]);
}
return array;
}
//calculer la surface d'un cercle
var sufaceCercle = function (rayon) {
//  on declare que la surface est égal à MAth.PI * rayon au carré
  surface = Math.PI * Math.pow(rayon,2);
return Math.round(surface); // retourner le résultat arrondi
}
//CALCULER L'HYPOTHENUSE
var hypothenuse = function (ab, ac) {
  bcPow2 = Math.pow(ab, 2) + Math.pow(ac, 2)
  // Math.sqrt(valeur) pour realiser la racine carrée de celle-ci.
   return Math.sqrt(bcPow2);//PERMET DE CALCULER LA RACINE CARREE
}
//CALCULER L IMC
var calculIMC = function (poids, taille) {
// ON DECLARE LA VARIABLE IMC AVCE SON CALCUL
    var imc = (poids / Math.pow(taille,2))
    return Math.round(imc*100)/100;//ON ARRONDIT A DEUX DECIMALES
    //return imc.toFixed('2');   Ne fonctionne pas
}
