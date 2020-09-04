import React, { useEffect } from "react";
import { connect } from "react-redux";

import { auth } from "./firebase/firebase";

import Login from "./components/login/login.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Feed from "./components/feed/feed.component";
import Widgets from "./components/widgets/widgets.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { displayName, email, photoURL } = userAuth;

        setCurrentUser({
          displayName,
          email,
          photoURL,
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <div className="app">
      {currentUser ? (
        <div>
          <Header />

          <div className="app__body">
            <Sidebar />

            <Feed />

            <Widgets />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
