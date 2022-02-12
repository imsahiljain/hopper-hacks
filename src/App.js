import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/home";
import Login from "../src/pages/login/login";
import Navbar from "./components/navbar/navbar";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { ToastContainer } from "react-toastify";
import About from "./pages/about/about";
import Marketplace from "./pages/marketplace/marketplace";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </>
    );
  }
}
export default App;
