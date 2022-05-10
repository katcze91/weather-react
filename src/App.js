import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";


export default function App() {
  return( <div className="container">
    <Weather cityDefault="London" />
    <Footer />
  </div>);
}  