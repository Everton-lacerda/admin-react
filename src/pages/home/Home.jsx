import React from "react";
import "./home.scss";

import card1 from "../../assets/PNG/Scenes/1x/Shopping, e-commerce _ purchase, shopping, shop, commerce, payment, store.png";
import card2 from "../../assets/PNG/Scenes/1x/Business, Startup, Growth, success _ build, idea, innovation, man, thought, grow, smart.png";
import card3 from "../../assets/PNG/Scenes/1x/Shopping, e-commerce, finance _ store, online, shop, woman, invoice, fashion, purchase.png";
import arrowLeft from "../../assets/next.png";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div>
      <div className="header">
        <h1 className="title">Sistema de compras</h1>
        <h2 className="subTitle">
          <strong>DestroTech</strong> - Cotação online
        </h2>
      </div>
      <div className="container">
        <article className="card card1">
          <a href="#" className="card__link">
            <div className="card__icon">
              <img src={card1} alt="Logo" width={150} />
            </div>

            <div className="card__media">
              <img src={card1} alt="Logo" width={200} />
            </div>

            <div className="card__header">
              <h3 className="card__header-title">Processo de compras</h3>
              <p className="card__header-meta">
                <ul>
                  <li>Consolidação das solicitações</li>
                  <li>Definição de requisição</li>
                  <li>Pedido do direto e cotação online</li>
                </ul>
              </p>
              <div className="card__header-icon">
                <img src={arrowLeft} alt="Logo" width={40} />
              </div>
            </div>
          </a>
        </article>
        <article className="card card2">
          <a href="#" className="card__link">
            <div className="card__icon">
              <img src={card2} alt="Logo" width={150} />
            </div>
            <div className="card__media">
              <img src={card2} alt="Logo" width={150} />
            </div>

            <div className="card__header">
              <h3 className="card__header-title">Fornecedores</h3>
              <p className="card__header-meta">
                <ul>
                  <li>Cotação online Uso exclusivo do fornecedor</li>
                </ul>
              </p>
              <div className="card__header-icon">
                <img src={arrowLeft} alt="Logo" width={40} />
              </div>
            </div>
          </a>
        </article>
        <article className="card card3">
          <a href="#" className="card__link">
            <div className="card__icon">
              <img src={card3} alt="Logo" width={150} />
            </div>

            <div className="card__media">
              <img src={card3} alt="Logo" width={150} />
            </div>

            <div className="card__header">
              <h3 className="card__header-title ">compras online</h3>
              <p className="card__header-meta">
                <ul>
                  <li>Consolidação e apuração das <br /> cotações</li>
                  <li>Emissão de pedido online</li>
                </ul>
              </p>
              <div className="card__header-icon">
                <img src={arrowLeft} alt="Logo" width={40} />
              </div>
            </div>
          </a>
        </article>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
