import React, { useState } from "react";
import firebase from "./Services/firebase";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import "./pure.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import test from test;
import {
  faCheckSquare,
  faCoffee,
  faUser,
  faEnvelope,
  faPlusSquare,
  faChevronCircleDown,
  faEllipsisV,
  faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faUser,
  faEnvelope,
  faPlusSquare,
  faChevronCircleDown,
  faEllipsisV,
  faBars
);

function Hello() {
  const [user, setUser] = useState("");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser("");
    }
  });
  const handlerSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <div>
        <Navigation user={user} signout={handlerSignOut} />
      </div>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
