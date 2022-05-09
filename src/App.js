import { Fragment } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Cta></Cta>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
