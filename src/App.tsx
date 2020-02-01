import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"; // make sure you add this for firestore
import React from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createFirestoreInstance } from "redux-firestore";
import { firebase as fbConfig, reduxFirebase as rfConfig } from "./config";
import PersonsList from "./persons/PersonsList";
import store from "./store";
firebase.initializeApp(fbConfig);

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={PersonsList} />
          </Switch>
        </div>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
