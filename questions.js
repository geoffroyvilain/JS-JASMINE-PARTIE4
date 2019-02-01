/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
 // (texte) représente la chaîne de caractères dans un autre fichier
// toutes les infos sont sur www.mdn
//  DONNER LA TAILLE DE LA CHAINE DE CARACTERE, on utilise x.length, renvoi le nombre de caractère
var tailleString = function (texte) {
    return texte.length; //length est une propriété
}
//  REMPLACER LE PREMIER "e" DE LA CHAINE DE CARACTERE PAR UN ESPACE? ON UTILISE .replace(caractère ciblé, caractère de remplacement)
var remplaceECar = function (texte) {
    return texte.replace('e',' ');  //ici, on remplace le e par un espace
}
//  CONCATAINER 2 CHAINES DE CARACTERES
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);  //ou return texte1+texte2; celle ci peut poser problème en cas de concaténation de nombres ou chiffres
}
//  AFFICHER LE 5EME CARACTERE DE LA CHAINE; On utilise x.charAt(position de la lettre et -1) car le tableau commence à 0 et non 1
var afficherCar5 = function (texte) {
    return texte.charAt(4);  // 4 pour le 5ème caractère
}
//  AFFICHER LES 9 PREMIERS CARACTERES; On utilise x.substring(position de la 1ere lettre, position de la dernière
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
//SUPPRIMER LES ESPACES AVANT ET APRÈS LA CHAINE ON UTILISE TRIM POUR SUPPRIMER LES ESPACES
var SupprEspaceString = function (texte) {
    return texte.trim(); //return texte.replace(/^\s+|\s+$/g,''); FONCTIONNE MAIS NE SAIT PAS COMMENT C EST PLUS POUR REMPLACER DES CARACTERES
}
//AFFICHER TRUE SI LE PARAMETRE D ENTREE DE LA FONCTION EST DE TYPE string
var IsString = function (texte) {
  //SI LE TYPE DE (TEXTE) EST EGAL A 'STRING' ALORS RETOURNE TRUE SINON FALSE
      if(typeof texte == 'string'){ //TYPEOF EST UN OPERATEUR
      return true
    }else{
      return false
    }
}
//EXTRAIRE L EXTENSION D UN FICHIER : split(.);pop() pour resortir l'extension d'un fichier
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();//SPLIT ECLATE LA CHAINE DE CARACTERE ET POP POUR NE PAS PRENDRE EN COMPTE AVANT LE POINT
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
    return Math.pow(x,y);  //MATH EST UN OBJET .POW EST UNE METHODE (AU LIEU D UN OBJET CAD PAREIL)
}
// RESSORTIE LA VALEUR ABS D UN NOMBRE : Math.abs(valeur)
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
//afficher les valeurs absolues de plusieurs nombres
var valeurAbsolueArray = function (array) {
  return array.map(Math.abs); //.map pour faire une fonction sur tout un tableau
}
//calculer la surface d'un cercle et arrondir à l'entier le plus proche
var sufaceCercle = function (rayon) {
//  on declare que la surface est égal à Math.PI * rayon au carré
  surface = Math.PI * Math.pow(rayon,2);
return Math.round(surface); // retourner le résultat arrondi
}
//CALCULER L'HYPOTHENUSE
var hypothenuse = function (ab, ac) {
  return Math.hypot(ab,ac);
/* autre methode moins bien
  bcPow2 = Math.pow(ab, 2) + Math.pow(ac, 2)
  // Math.sqrt(valeur) pour realiser la racine carrée de celle-ci.
   return Math.sqrt(bcPow2);//PERMET DE CALCULER LA RACINE CARREE
}*/
//CALCULER L IMC ET ARRONDIR A 2 DECIMALES
var calculIMC = function (poids, taille) {
// ON DECLARE LA VARIABLE IMC AVEC SON CALCUL
    var imc = (poids / Math.pow(taille,2)).toFixed(2);
    return imc
}
}
