import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, Dispatch, setStateAction } from "react";

var charbon = 0;
var textAssi = "None";
var money = 0;

function minFer() {
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
    charbon += Math.floor(Math.random() * (11 - 4)) + 4;
    document.getElementById("showCharbon").innerHTML = charbon;
  }, 5000);
  setTimeout(function () {
    textAssi = "Minage terminé";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 6000);
}
function sell() {
  document.getElementById("textAssiH2").innerHTML = textAssi;
  textAssi = "Assistant : Calcul en cours des bénéfices";
  document.getElementById("textAssiH2").innerHTML = textAssi;
  setTimeout(function () {
    textAssi = "Assistant : Vous allez gagner :" + (charbon*0.5);
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 3000);
  setTimeout(function(){
    textAssi = "Assistant : Vente en cours";
    document.getElementById("textAssiH2").innerHTML = textAssi;
    money += (charbon*0.5);
    document.getElementById("showMoney").innerHTML = money;
  }, 4000);
  setTimeout(function(){
    textAssi = "Assistant : Vente terminé";
    document.getElementById("textAssiH2").innerHTML = textAssi;
  }, 6000);
}
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Minage simulator v2</h1>
      <h2 id="textAssiH2">Assistant : Que voulez vous faire humain ?</h2>
      <div className="tablediv">
        <p>Actions</p>
        <table className="rien">
          <tr>
            <td>Minner :</td>
            <td>
              <button onClick={minFer}>charbon</button>
            </td>
          </tr>
        </table>
      </div>

      <div className="tablediv">
        <p>Inventaire</p>
        <button onClick={sell}>Tout vendre</button>
        <table>
          <tr>
            <td>Coin :</td>
            <td>Charbon :</td>
            <td>Cuivre :</td>
          </tr>
          <tr>
            <td><span id="showMoney">0</span></td>
            <td>
              <span id="showCharbon">0</span>
            </td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
