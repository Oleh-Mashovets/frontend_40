import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <>
    <Header></Header>
    <div className="section_main">
      <Aside/>
      <Main/>
    </div>
    </>
  );
}

export default App;
