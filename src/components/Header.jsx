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
  const [data, setData] = useState([]);
  const [lastRefreshedTime, setLastRefreshedTime] = useState(null);
  const Toggle = () => setModal(!modal);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/data/last");
      const jsonData = await res.json();
      console.log("jsonData", jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to add new data
  // const addNewData = async (newData) => {
  //   try {
  //     // Make API request to add new data
  //     await fetch("http://localhost:5000/api/data/last", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newData),
  //     });

  //     // Fetch updated data after adding new data
  //     fetchData();
  //   } catch (error) {
  //     console.error("Error adding new data:", error);
  //   }
  // };

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

    return `${diffInMin} mins ago`;
  };

  const walletAdress = "0xF4165678e707125D1d581877417272a3100c251b";

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
              <p>{data && <ShortenedWord word={data.pubKey} />}</p>
              {/* <p>
                <ShortenedWord word={walletAdress} />
              </p> */}
              <div className="wallet__copyButton">
                <a
                  href={`https://etherscan.io/address/${walletAdress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={editImage} />
                </a>
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
