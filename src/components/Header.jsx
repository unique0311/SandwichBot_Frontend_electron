import React, { useState, useEffect } from "react";

import editImage from "../img/edit.png";
import userImage from "../img/user.png";
import walletImage from "../img/wallet.png";
import updateImage from "../img/update.png";
import playImage from "../img/play.png";

import Modal from "./Modal.jsx";
import ShortenedWord from "./ShotenedWord.jsx";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [start, setStart] = useState(false);
  const [walletAddress, setWalletAddress] = useState([]);
  const [balance, setBalance] = useState("");
  const [usdBalance, setUsdBalance] = useState("");
  const [wethBalance, setWethBalance] = useState("");
  const [wethUsdBalance, setWethUsdBalance] = useState("");
  // const [ethPrice, setEthPrice] =  useState("");
  const [lastRefreshedTime, setLastRefreshedTime] = useState(null);
  const Toggle = () => setModal(!modal);

  const fetchWalletAddress = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/data/last");
      const jsonWalletAdress = await res.json();
      if (jsonWalletAdress && jsonWalletAdress.pubKey) {
        setWalletAddress(jsonWalletAdress);
        setBalance(jsonWalletAdress.EthBalance);
        setUsdBalance(jsonWalletAdress.EthToUsdPrice);
        // setWethBalance(jsonWalletAdress.WethBalance);
        // setWethUsdBalance(jsonWalletAdress.WethToUsdPrice);
      } else {
        console.error("Wallet address not found in the database");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleStart = () => {
    fetch("http://localhost:5000/start")
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setStart(true);
  };

  const handleStop = () => {
    fetch("http://localhost:5000/stop")
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setStart(false);
  };

  useEffect(() => {
    fetchWalletAddress();

    const interval = setInterval(() => {
      fetchWalletAddress();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePageRefresh = () => {
    localStorage.setItem("lastResfreshTime", new Date().getTime());
    window.location.reload();
  };

  const calculateRefreshedTime = () => {
    // const currentTime = new Date();
    setLastRefreshedTime(localStorage.getItem("lastResfreshTime"));
  };

  useEffect(() => {
    calculateRefreshedTime();

    const interval = setInterval(() => {
      calculateRefreshedTime();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatRefreshedTime = (time) => {
    const diffInMs = new Date() - time;
    const diffInMin = Math.floor(diffInMs / (1000 * 60));
    if (diffInMin === 0) {
      return "Just now";
    } else {
      if (diffInMin === 1) {
        return `${diffInMin} min ago`;
      } else {
        return `${diffInMin} mins ago`;
      }
    }
  };

  return (
    <div className="header_container">
      <div className="header_left">
        <div className="wallet__container" onClick={() => Toggle()}>
          <div className="user__image">
            <img src={userImage} />
          </div>
          <div className="wallet__title">
            {/* <p className="current__wallet_title">Connect Wallet</p> */}
            <p className="current__wallet_title">Current Wallet</p>
            <div className="wallet__address">
              {walletAddress && (
                <>
                  <p>
                    <ShortenedWord word={walletAddress.pubKey} />
                  </p>
                  <div className="wallet__copyButton">
                    <a
                      href={`https://etherscan.io/address/${walletAddress.pubKey}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={editImage} />
                    </a>
                  </div>
                </>
              )}
              {/* <p>
                <ShortenedWord word={walletAdress} />
              </p> */}
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
            <p className="value__color">{parseFloat(balance).toFixed(2)} ETH</p>
            <p className="dolarValue__color">
              (${parseFloat(usdBalance).toFixed(2)})
            </p>
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
            <p className="value__color">
              {parseFloat(wethBalance).toFixed(2)} WETH
            </p>
            <p className="dolarValue__color">
              (${parseFloat(wethUsdBalance).toFixed(2)})
            </p>
          </div>
        </div>
      </div>
      <div className="header_right">
        <div className="updated__main">
          <div className="updated__icon" onClick={handlePageRefresh}>
            <div className="updated__image">
              <img src={updateImage} />
            </div>
            <p>Updated:</p>
          </div>
          <p className="updated__data">
            {lastRefreshedTime && formatRefreshedTime(lastRefreshedTime)}
          </p>
        </div>
        {start ? (
          <div className="trading__button_stop" onClick={handleStop}>
            <div className="tadingButton__image_stop" />
            <p>Stop Trading</p>
          </div>
        ) : (
          <div className="trading__button" onClick={handleStart}>
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
