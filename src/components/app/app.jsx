import { Route, Routes } from "react-router-dom";
import { Header } from "../header/header";
import { HomePage } from "../pages/home-page";

function App() {
  return (
    <main role="main" className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        </Route>
      </Routes> 
    </main>
  );
}

export default App;
