import { Routes, Route } from "react-router-dom";
import Page2 from "./pages/Page2";
import Header from "./Component/Header";
import Table from "./Component/Table";
import Users from "./Component/Users";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
