import React, { useState, useEffect } from "react";
import axios from "axios";

import ChartBody from "./components/Chart.jsx";
import ChartHeader from "./components/ChartHeader.jsx";
import Header from "./components/Header.jsx";
import Profit from "./components/Profit.jsx";

function App() {
  const [liveTradeData, setLiveTradeData] = useState([]);
  const [pastTradeData, setPastTradeData] = useState([]);
  const [visibleCom, setVisibleCom] = useState(8);
  const [selectedTag, setSelectedTag] = useState("1D");
  const [filteredPastTradeData, setFilteredPastTradeData] = useState([]);
  const [walletAddress, setWalletAddress] = useState([]);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const showMoreComponents = () => {
    setVisibleCom((prevVisibleComponents) => prevVisibleComponents + 7);
  };

  useEffect(() => {
    const fetchWalletAddress = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}:3306/api/data/last`);
        const jsonWalletAdress = await res.json();
        if (jsonWalletAdress && jsonWalletAdress.pubKey) {
          setWalletAddress(jsonWalletAdress.pubKey);
        } else {
          console.error("Wallet address not found in the database");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };


    const fetchLiveTrades = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}:3306/api/liveTrade`);
        setLiveTradeData(res.data);
      } catch (err) {
        console.error("Error fetching live trade data: ", err);
      }
    };

    const fetchPastTrades = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}:3306/api/pastTrade`);
        setPastTradeData(res.data);

        if (walletAddress) {
          const filteredData = pastTradeData.filter(trade => trade.address === walletAddress);
          setFilteredPastTradeData(filteredData);
        }
      } catch (err) {
        console.error("Error fetching past trade data: ", err);
      }
    };

    fetchWalletAddress();
    fetchLiveTrades();
    fetchPastTrades();

    const interval = setInterval(() => {
      fetchWalletAddress();
      fetchLiveTrades();
      fetchPastTrades();
    }, 5000);

    return () => clearInterval(interval);
  }, [walletAddress, pastTradeData]);

  const updateTime = (time) => {
    const currentTime = new Date();
    const timeDiff = currentTime - time;

    if (timeDiff < 60000) {
      return `${Math.floor(timeDiff / 1000)} seconds ago`;
    } else if (timeDiff < 3600000) {
      return `${Math.floor(timeDiff / (1000 * 60))} mins ago`;
    } else if (timeDiff < 86400000) {
      return `${Math.floor(timeDiff / (1000 * 60 * 60))} hours ago`;
    } else {
      return `${Math.floor(timeDiff / (1000 * 60 * 60 * 24))} days ago`;
    }
  };

  return (
    <div className="container">
      <Header />
      <Profit />
      <div className="liveTrades__container">
        <p className="liveTrades__title">Live Trades •</p>
        <ChartHeader />
        <div className="liveTrades__body">
          {liveTradeData.map((trade, index) => (
            <ChartBody
              key={index}
              time={trade.txTime}
              tx={trade.TxHash}
              swapFrom={trade.swapFrom}
              swapTo={trade.swapTo}
              status={trade.Status}
              profit={trade.profit}
              change={trade.change}
              profitUSD={trade.EthToUsd}
            />
          ))}
        </div>
      </div>
      <div className="pastTrades__container">
        <div className="pastTrades__title">
          <p>Past Trades</p>
          <div className="pastTrades__scale">
            {/* {
              selectedTag == "1D" ? {} : {}
            } */}
            <div
              className={`scale__container ${selectedTag === "1D" ? "scale__active" : ""
                }`}
              style={{
                borderRadius: "4px 0 0 4px",
              }}
              onClick={() => handleTagSelect("1D")}
            >
              1D
            </div>
            <div
              className={`scale__container ${selectedTag === "7D" ? "scale__active" : ""
                }`}
              onClick={() => handleTagSelect("7D")}
            >
              7D
            </div>
            <div
              className={`scale__container ${selectedTag === "14D" ? "scale__active" : ""
                }`}
              onClick={() => handleTagSelect("14D")}
            >
              14D
            </div>
            <div
              className={`scale__container ${selectedTag === "30D" ? "scale__active" : ""
                }`}
              style={{ borderRadius: "0 4px 4px 0" }}
              onClick={() => handleTagSelect("30D")}
            >
              30D
            </div>
          </div>
        </div>
        <ChartHeader />
        <div className="trades__mainInfo">
          {filteredPastTradeData.slice(0, visibleCom).map((trade, index) => (
            <ChartBody
              key={index}
              time={updateTime(trade.txTime)}
              tx={trade.TxHash}
              swapFrom={trade.swapFrom}
              swapTo={trade.swapTo}
              status={trade.Status}
              profit={trade.profit}
              change={trade.change}
              profitUSD={trade.EthToUsd}
            />
          ))}
        </div>
        <div className="showmore__container">
          {visibleCom <= pastTradeData.length && (
            <button className="showmore__button" onClick={showMoreComponents}>
              Show More
            </button>
          )}
        </div>
        {/* <ShowmoreModal show={showMore} close={Switch} /> */}
      </div>
    </div>
  );
}

export default App;
