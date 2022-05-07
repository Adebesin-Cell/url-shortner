import { Fragment } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      <About></About>
    </Fragment>
  );
}

export default App;
