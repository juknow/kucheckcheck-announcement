import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main"></main>
      <footer className="footer">
        <div className="footer-text">
          Made with ♥ by KUCC <br />
          <br />
          서울특별시 성북구 고려대로 105 고려대학교 학생회관 314호
          <br />
          anamkucc314@gmail.com
        </div>
      </footer>
    </div>
  );
}

export default App;
