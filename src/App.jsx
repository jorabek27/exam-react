import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Table from "./Component/Table";
import Users from "./Component/Users";
import Page2 from "./pages/Page2";

function App() {
  return (
    <div>
      {/* Har doim chiqadigan Header */}
      <Header />

      {/* Sahifalar marshrutlari */}
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
