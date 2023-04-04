import React from "react";
// import ShopItemFunc from "../components/ShopItemFunc/ShopItemFunc.jsx";
import ShopItemClass from "../components/ShopItemClass/ShopItemClass.jsx";
import ShopModel from "../ShopModel.js";

import "./App.css";

function App() {
  const item = new ShopModel(
    "Tiger of Sweden",
    "Leonard coat",
    "Minimalistic coat in cotton-blend",
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    399,
    "£"
  );

  // return <ShopItemFunc item={item} />
  return <ShopItemClass item={item} />;
}

export default App;
