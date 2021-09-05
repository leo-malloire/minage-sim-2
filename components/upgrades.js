var machineLv = 0;
var textAssi = "None";

function costUpMachine() {
  if (machineLv === 0) {
    return 1000;
  }
  if (machineLv === 1) {
    return 5000;
  }
}

export function upMachine() {
  document.getElementById("textAssiH2").innerHTML = textAssi;
  textAssi =
    "Assistant : L'amélioration de la machine vous coutera " + costUpMachine();
  document.getElementById("textAssiH2").innerHTML = textAssi;
}
