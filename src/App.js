import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import CreatePerson from "./components/createPerson";
import ListPerson from "./components/listPerson";
import PersonDedail from "./components/personDedail";
import { useSelector } from "react-redux";

const App = () => {
  const { person} = useSelector((state) => state.person);

  
  return (
    <div>
      <Header />  
      <Routes>
        <Route path="/" element={<CreatePerson />} />
        <Route path="/list" element={<ListPerson />} />
        <Route path="/list/:id" element={<PersonDedail {...person} />} />
      </Routes>
    </div>
  );
};

export default App;
