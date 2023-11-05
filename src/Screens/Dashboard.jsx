import React, { useEffect, useState } from "react";
import "../Style/dashboard.css";
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import WalletIcon from "@mui/icons-material/Wallet";

import TouchBox from "../Components/TouchBox";
import Carousel from "../Components/Carousel";
import List from "../Components/List";
import Category from "../Constants/Category.json";

function Dashboard() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
  );
  useEffect(() => {
    const bgImg = document.getElementById("bg-img");
    const bgImg2 = document.getElementById("bg-img2");
    if (bgImg.style.opacity === "1") {
      bgImg2.src = image;
      bgImg.style.opacity = 0;
    } else {
      bgImg.src = image;
      bgImg.style.opacity = 1;
    }
  }, [image]);

  return (
    <div className="main">
      <img className="bg-img" id="bg-img" draggable={false} />
      <img className="bg-img2" id="bg-img2" draggable={false} />
      <div className="cover"></div>
      <header>
        <div>
          <div className="logo-container">
            <h1 className="logo">Ignite</h1>
          </div>
        </div>
        <input type="text" />
        <div className="flex">
          {/* <div className="dull-box">
            <span>&nbsp;Login</span>
          </div> */}
          <div className="dull-box">
            <AccountCircleOutlined />
          </div>
          <a href="https://metamask.io/" target="_blank">
          <div className="dull-box" onClick="">
            <span className="login-btn">Login </span>
            <WalletIcon />
          </div>
          </a>  
          <div className="dull-box">
            <ShoppingCartOutlined />
          </div>
        </div>
      </header>
      { <div className="content">
        <div className="flex">
          {Category.map((x, i) => {
            return (
              <TouchBox
                key={x.name}
                text={x.name}
                isActive={categoryIndex === i}
                onClick={() => setCategoryIndex(i)}
              />
            );
          })}
        </div>
        <div className="carousel-container">
          <Carousel setImage={setImage} />
        </div>
        <div className="list">
          <List />
        </div>
      </div>}
    </div>
  );
}

export default Dashboard;
