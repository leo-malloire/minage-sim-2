var charbon = 0;
var fer = 0;
var textAssi = "None";
var money = 0;

function minDialog() {
  document.getElementById("textAssiH2").innerHTML = textAssi;
  textAssi = "Scan en cours du sol";
  document.getElementById("textAssiH2").innerHTML = textAssi;
  setTimeout(function () {
    textAssi = "Minerai trouvé !";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 1000);
  setTimeout(function () {
    textAssi = "Minage en cours";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 2000);
  setTimeout(function () {
    textAssi = "Minage terminé";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 5000);
  setTimeout(function () {
    textAssi = "Assistant : Que voulez vous faire ?";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 6000);
}

export function sell() {
  document.getElementById("textAssiH2").innerHTML = textAssi;
  textAssi = "Assistant : Calcul en cours des bénéfices";
  document.getElementById("textAssiH2").innerHTML = textAssi;
  setTimeout(function () {
    textAssi = "Assistant : Vous allez gagner :" + (charbon * 0.5 + fer);
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 3000);
  setTimeout(function () {
    textAssi = "Assistant : Vente en cours";
    document.getElementById("textAssiH2").innerHTML = textAssi;
    money += charbon * 0.5 + fer;
    charbon = 0;
    fer = 0;
    document.getElementById("showMoney").innerHTML = money;
    document.getElementById("showCharbon").innerHTML = charbon;
    document.getElementById("showFer").innerHTML = fer;
  }, 4000);
  setTimeout(function () {
    textAssi = "Assistant : Vente terminé";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 6000);
  setTimeout(function () {
    textAssi = "Assistant : Que voulez vous faire ?";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 7000);
}

export function minCharbon() {
  minDialog();
  charbon += Math.floor(Math.random() * (11 - 4)) + 4;
  document.getElementById("showCharbon").innerHTML = charbon;
}
export function minFer() {
  minDialog();
  fer += Math.floor(Math.random() * (6 - 1)) + 1;
  document.getElementById("showFer").innerHTML = fer;
}
