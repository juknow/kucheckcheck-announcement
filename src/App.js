import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navigator from "./component/Navigator";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <main className="main"></main>
      <Footer />
    </div>
  );
}

export default App;
