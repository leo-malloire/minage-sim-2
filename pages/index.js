import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, Dispatch, setStateAction } from "react";
import { upMachine } from "../components/upgrades";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [totalCharbon, setTotalCharbon] = useState(0);
  const [totalCoin, setTotalCoin] = useState(0);
  const [totalFer, setTotalFer] = useState(0);
  const [totalCuivre, setTotalCuivre] = useState(0);
  const [textAssi, setTextAssi] = useState(
    "Assistant : Que voulez vous faire ?"
  );
  const [currentPanel, setCurrentPanel] = useState("actions");

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
    return fer
  }function minCharbon(charbon) {
    charbon += Math.floor(Math.random() * (11 - 4)) + 4;
    return charbon
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
    <div className={styles.container}>
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
        <div className="tablediv" id="actions">
          <p>Actions</p>
          <p>Minner :</p>
          <div className="spacebetween">
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={() => {
                minDialog("charbon");
              }}
            >
              charbon (revente : 0.5 coin)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={() => {
                minDialog("fer");
              }}
            >
              fer (revente : 1 coin)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={minFer}
            >
              Cuivre (revente : 1 coin)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={minFer}
            >
              or (revente : 1 coin)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={minFer}
            >
              diamant (revente : 1 coin)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={minFer}
            >
              platine (revente : 1 coin)
            </Button>
          </div>
          <p>Améliorer :</p>
          <div className="spacebetween">
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={upMachine}
            >
              Machine (plus de minerai récolté)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={upMachine}
            >
              Détecteur (débloquage de nouveaux minerais)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={upMachine}
            >
              Fonderie (lingots se vent plus cher)
            </Button>
            <Button
              className="buttonstyle"
              variant="contained"
              color="primary"
              onClick={upMachine}
            >
              Employés (minage automatique)
            </Button>
          </div>
        </div>
      )}
      {currentPanel === "inventory" && (
        <div className="tablediv" id="inventory">
          <p>Inventaire</p>
          <Button
            className="buttonstyle"
            variant="contained"
            color="primary"
            onClick={() => setTotalCoin(sell(totalCoin))}
          >
            Tout vendre
          </Button>
          <TableContainer component={Paper} style={{ minWidth: 0 }}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Nombre</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      <div className="bottomnav">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Actions"
            icon={<span className="material-icons">list</span>}
            onClick={() => setCurrentPanel("actions")}
          />
          <BottomNavigationAction
            label="Inventaire"
            icon={<span className="material-icons">inventory_2</span>}
            onClick={() => setCurrentPanel("inventory")}
          />
          <BottomNavigationAction
            label="Paramètres"
            icon={<span className="material-icons">settings</span>}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}
