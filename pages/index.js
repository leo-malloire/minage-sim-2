import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, Dispatch, setStateAction } from "react";
import { upMachine } from "../components/upgrades";

export default function Home() {
  const [value, setValue] = useState(0);
  const [totalCharbon, setTotalCharbon] = useState(0);
  const [totalCoin, setTotalCoin] = useState(0);
  const [totalFer, setTotalFer] = useState(0);
  const [totalCuivre, setTotalCuivre] = useState(0);
  const [textAssi, setTextAssi] = useState(
    "Assistant : Que voulez vous faire ?"
  );
  const [currentPanel, setCurrentPanel] = useState("actions");
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => setHasLoaded(true), []);

  function upDetecFunc() {
    setTextAssi("L'upgrade vous coutera 500 coins");
    setTimeout(function () {
      if (totalCoin >= 500) {
        setTextAssi(
          "Mise a jour en cours du détecteur pour l'ajout de nouveaux minerais ..."
        );
      }
    }, 1000);
  }
  function sell() {
    setTextAssi("Assistant : Calcul en cours des bénéfices");
    setTimeout(function () {
      setTextAssi(
        "Assistant : Vous allez gagner :" + (totalCharbon * 0.5 + totalFer)
      );
    }, 3000);
    setTimeout(function () {
      setTextAssi("Assistant : Vente en cours");
      setTotalCoin(totalCoin + totalCharbon * 0.5 + totalFer);
      setTotalCharbon(0);
      setTotalFer(0);
    }, 4000);
    setTimeout(function () {
      setTextAssi("Assistant : Vente terminé");
    }, 6000);
    setTimeout(function () {
      setTextAssi("Assistant : Que voulez vous faire ?");
    }, 7000);
  }
  function minFer(fer) {
    fer += Math.floor(Math.random() * (6 - 1)) + 1;
    return fer;
  }
  function minCharbon(charbon) {
    charbon += Math.floor(Math.random() * (11 - 4)) + 4;
    return charbon;
  }
  function minDialog(ore) {
    setTextAssi("Scan en cours du sol");
    setTimeout(function () {
      setTextAssi("Minerai trouvé !");
    }, 1000);
    setTimeout(function () {
      setTextAssi("Minage en cours");
    }, 2000);
    setTimeout(function () {
      setTextAssi("Minage terminé");
      if (ore === "fer") {
        setTotalFer(minFer(totalFer));
      } else if (ore === "charbon") {
        setTotalCharbon(minCharbon(totalCharbon));
      } else if (ore === "cuivre") {
      }
    }, 5000);
    setTimeout(function () {
      setTextAssi("Assistant : Que voulez vous faire ?");
    }, 6000);
  }
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Coin", <span>{totalCoin}</span>),
    createData("Charbon", <span>{totalCharbon}</span>),
    createData("Fer", <span>{totalFer}</span>),
    createData("Cuivre", <span>{totalCuivre}</span>),
    createData("or", 0),
  ];

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="description" content="Un jeu de minage" />
        <title>Minage simulator v2</title>
      </Head>
      <h2 id="textAssiH2">{textAssi}</h2>
      {currentPanel === "actions" && (
        <div className="tablediv panCenter panFlex" id="actions">
          <p>Actions</p>
          <div>
            <p>Minner :</p>
            <div className="spacebetween">
              <div
                className="btn2"
                onClick={() => {
                  minDialog("charbon");
                }}
              >
                <p>charbon (revente : 0.5 coin)</p>
              </div>
              <div
                className="btn2"
                onClick={() => {
                  minDialog("fer");
                }}
              >
                <p>fer (revente : 1 coin)</p>
              </div>
              <div className="btn2" onClick={minFer}>
                <p>Cuivre (revente : 1 coin)</p>
              </div>
              <div className="btn2" onClick={minFer}>
                <p>or (revente : 1 coin)</p>
              </div>
              <div className="btn2" onClick={minFer}>
                <p>diamant (revente : 1 coin)</p>
              </div>
              <div className="btn2" onClick={minFer}>
                <p>platine (revente : 1 coin)</p>
              </div>
            </div>
          </div>
          <div>
            <p>Améliorer :</p>
            <div className="spacebetween">
              <div className="btn2" onClick={upMachine}>
                <p>Machine (plus de minerai récolté)</p>
              </div>
              <div className="btn2" onClick={upMachine}>
                <p>Détecteur (débloquage de nouveaux minerais)</p>
              </div>
              <div className="btn2" onClick={upMachine}>
                <p>Fonderie (lingots se vent plus cher)</p>
              </div>
              <div className="btn2" onClick={upMachine}>
                <p>Employés (minage automatique)</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentPanel === "inventory" && (
        <div className="tablediv panCenter panFlex" id="inventory">
          <div className="inline">
            <p>Inventaire</p>
            <div
              className="btn sellbtn"
              onClick={() => setTotalCoin(sell(totalCoin))}
            >
              <p>Tout vendre</p>
            </div>
            <table>
              <tr>
                <td>Item</td>
                <td align="right">Nombre</td>
              </tr>
              {rows.map((row) => (
                <tr key={row.name}>
                  <td component="th" scope="row">
                    {row.name}
                  </td>
                  <td align="right">{row.calories}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}

      <div className="bottomnav">
        <div className="btn" onClick={() => setCurrentPanel("actions")}>
          <p>Actions</p>
        </div>
        <div
          className="btn middlebtn"
          onClick={() => setCurrentPanel("inventory")}
        >
          <p>Inventaire</p>
        </div>
        <div className="btn">
          <p>Paramètres</p>
        </div>
      </div>
    </div>
  );
}
