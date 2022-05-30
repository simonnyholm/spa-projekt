import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <Nav />
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
