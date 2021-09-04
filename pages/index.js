import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState , useEffect, Dispatch, setStateAction} from 'react'

var click = 0;
var fer = 0;

function minFer() {
  fer += 1;
  console.log(fer);
  document.getElementById("showFer").innerHTML = fer;
}
function minage() {
  click += 1;
}

export default function Home() {
  document.getElementById("showFer").innerHTML = fer;
  return (
    <div className={styles.container}>
      <h1>Minage simulator v2</h1>
      <button onClick={minage}>Miner</button>
      <button onClick={minFer}>fer</button>
      <div className="tablediv">
        <p>Inventaire :</p>
        <table>
          <tr>
            <td>Fer :</td>
            <td>Cuivre :</td>
          </tr>
          <tr>
            <td>
              <span id="showFer"></span>
            </td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
