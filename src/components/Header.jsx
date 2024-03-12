import React, { useState } from "react";

import editImage from "../img/edit.png";
import userImage from "../img/user.png";
import walletImage from "../img/wallet.png";
import updateImage from "../img/update.png";
import playImage from "../img/play.png";

import Modal from "./Modal.jsx";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [start, setStart] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="header_container">
      <div className="header_left">
        <div className="wallet__container" onClick={() => Toggle()}>
          <div className="user__image">
            <img src={userImage} />
          </div>
          <div className="wallet__title">
            <p className="current__wallet_title">Current Wallet</p>
            <div className="wallet__address">
              <p>0xd89d...1dac</p>
              <div className="wallet__copyButton">
                <img src={editImage} />
              </div>
            </div>
          </div>
        </div>
        <div className="ethBalance__container">
          <div className="ethBalance__title">
            <div className="wallet__image">
              <img
                src={walletImage}
                style={{ width: "16px", height: "15px" }}
              />
            </div>
            <p>ETH Balance:</p>
          </div>
          <div className="ethBalace__value">
            <p className="value__color">2.4 ETH</p>
            <p className="dolarValue__color">($8.4k)</p>
          </div>
        </div>
        <div className="ethBalance__container">
          <div className="ethBalance__title">
            <div className="wallet__image">
              <img
                src={walletImage}
                style={{ width: "16px", height: "15px" }}
              />
            </div>
            <p>WETH Balance:</p>
          </div>
          <div className="ethBalace__value">
            <p className="value__color">2.4 WETH</p>
            <p className="dolarValue__color">($8.4k)</p>
          </div>
        </div>
      </div>
      <div className="header_right">
        <div className="updated__main">
          <div className="updated__icon">
            <div className="updated__image">
              <img src={updateImage} />
            </div>
            <p>Updated:</p>
          </div>
          <p className="updated__data">1m ago</p>
        </div>
        {start ? (
          <div
            className="trading__button_stop"
            onClick={() => {
              setStart(false);
            }}
          >
            <div className="tadingButton__image_stop" />
            <p>Stop Trading</p>
          </div>
        ) : (
          <div
            className="trading__button"
            onClick={() => {
              setStart(true);
            }}
          >
            <div className="tadingButton__image">
              <img src={playImage} style={{ width: "16px", height: "16px" }} />
            </div>
            <p>Start Trading</p>
          </div>
        )}
      </div>
      <Modal show={modal} close={Toggle} />
    </div>
  );
};

export default Header;
