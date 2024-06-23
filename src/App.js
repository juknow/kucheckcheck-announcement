import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navigator from "./component/Navigator";
import Announce from "./component/Announce";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Announce />
      <Footer />
    </div>
  );
}

export default App;
