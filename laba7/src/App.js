import React from "react";
import "./styles/App.css";
import "./index.css";
import Header from "./components/Header";
import { Content } from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";
function App() {
  return (
    <div class="wrapper">
      <Header />
      <Content />
      <Image />
      <GoodsCard />
    </div>
  );
}
export default App;
