import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBar/SearchBar";
import { data } from "./data";

function App() {
  const [theme, settheme] = useState("dark-theme");
  const [searchField, setsearchField] = useState("");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(searchField.toLowerCase())
  );

  console.log(filteredData);
  return (
    <div>
      <Navbar theme={theme} settheme={settheme} />
      <SearchBar
        searchField={searchField}
        setsearchField={setsearchField}
        theme={theme}
      />
      <div className="card-container">
        <div className="cards-section">
          {filteredData.map(
            (d, index) => index < 6 && <Card key={d.id} data={d} />
          )}
        </div>
      </div>
      {searchField === "" ? <Pagination /> : null}

      <Footer theme={theme} />
    </div>
  );
}

export default App;
