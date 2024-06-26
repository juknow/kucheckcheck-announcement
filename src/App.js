import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navigator from "./component/Navigator";
import Announce from "./component/Announce";
import AnnounceRegister from "./component/AnnounceRegister";
import AnnounceDetail from "./component/AnnounceDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Navigator />
          <Routes>
            <Route path="/" element={<Announce />} />
            <Route path="/announce" element={<Announce />} />
            <Route path="/register" element={<AnnounceRegister />} />
            <Route path="/detail/:id" element={<AnnounceDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
