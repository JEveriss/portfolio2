import "./App.css";
import Header from "../components/header";
import Home from "../pages/home/home"
import Design from "../pages/design/design";
import Tester from "../pages/tester";
import Contact from "../pages/contact/contact"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Design />
      <Tester />
      <Contact />
    </div>
  );
}

export default App;
