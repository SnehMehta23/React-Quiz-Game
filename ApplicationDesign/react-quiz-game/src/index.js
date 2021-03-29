import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { db } from "./data/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.querySelector("#root")
);

async function readAllUsers() {
  try {
    // Long way:
    // const collectionRef = db.collection("users");
    // const getPromise = collectionRef.get();
    // const snapshot = await getPromise;

    // Short way:
    // const snapshot = await db.collection("users").get();
    const snapshot = await db
      .collection("users")
      .where("isOnline", "==", true)
      .get();

    const foundUsers = `Found ${snapshot.size}x user(s).`;
    const docs = snapshot.docs;
    console.log(`${foundUsers}`);
    docs.forEach((docSnapshot) => {
      let firstName = docSnapshot.get("firstName");
      let lastName = docSnapshot.get("lastName");
      let highScore = docSnapshot.get("highScore");
      let id = docSnapshot.id;

      let message = `
      User with ID: ${id}
      ---
      Name: ${firstName} ${lastName}
      High score: ${highScore}`;

      console.log(message);
    });
  } catch (err) {
    console.log(err);
  }
}

readAllUsers();
