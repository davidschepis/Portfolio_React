import React, { useState } from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
  const [page, setPage] = useState("aboutMe");

  const navigate = (str) => {
    setPage(str);
  };

  return (
    <div>
      <Header navigate={navigate} page={page} />
      <Body page={page} />
      <Footer />
    </div>
  );
}

export default App;
