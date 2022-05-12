import "./App.css";
import Header from "../components/header";
import Home from "../pages/home";
import Design from "../pages/design";

import WebsiteContainer from "../components/websiteContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <WebsiteContainer />
      <Design />
    </div>
  );
}

export default App;
