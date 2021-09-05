import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, Dispatch, setStateAction } from "react";
import { minFer, minCharbon, sell } from "../components/ores";
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
import { red } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core";

var money = 0;

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Coin", <span id="showMoney">0</span>),
  createData("Charbon", <span id="showCharbon">0</span>),
  createData("Fer", <span id="showFer">0</span>),
  createData("Cuivre", 0),
  createData("or", 0),
];

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

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
      <h1>Minage simulator v2</h1>
      <h2 id="textAssiH2">Assistant : Que voulez vous faire ?</h2>
      <div className="tablediv">
        <p>Actions</p>
        <p>Minner :</p>
        <div className="spacebettween">
          <Button
            className="buttonstyle"
            variant="contained"
            color="primary"
            onClick={minCharbon}
          >
            charbon (revente : 0.5 coin)
          </Button>
          <Button
            className="buttonstyle"
            variant="contained"
            color="primary"
            onClick={minFer}
          >
            fer (revente : 1 coin)
          </Button>
        </div>
        <p>Améliorer :</p>
        <Button
          className="buttonstyle"
          variant="contained"
          color="primary"
          onClick={upMachine}
        >
          Machine (plus de minerai récolté)
        </Button>
      </div>
      <div className="tablediv">
        <p>Inventaire</p>
        <Button
          className="buttonstyle"
          variant="contained"
          color="primary"
          onClick={sell}
        >
          Tout vendre
        </Button>
        <TableContainer component={Paper}>
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
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Recents"
          icon={<span className="material-icons">list</span>}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<span className="material-icons">inventory_2</span>}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<span className="material-icons">settings</span>}
        />
      </BottomNavigation>
    </div>
  );
}
