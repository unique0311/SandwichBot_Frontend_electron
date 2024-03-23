import React, { useState, useEffect } from "react";
import axios from "axios";

import ChartBody from "./components/Chart.jsx";
import ChartHeader from "./components/ChartHeader.jsx";
import Header from "./components/Header.jsx";
import Profit from "./components/Profit.jsx";
// import ShowmoreModal from "./components/ShowmoreModal.jsx";
// import PastTrades from "./components/PastTrade.jsx";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [liveTradeData, setLiveTradeData] = useState([]);
  const [pastTradeData, setPastTradeData] = useState([]);
  // const Switch = () => setShowMore(!showMore);
  const [visibleCom, setVisibleCom] = useState(8);
  const [selectedTag, setSelectedTag] = useState("1D");

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const showMoreComponents = () => {
    setVisibleCom((prevVisibleComponents) => prevVisibleComponents + 7);
  };

  useEffect(() => {
    const fetchLiveTrades = async () => {
      try {
        const res = await axios.get("http://localhost:3306/api/liveTrade");
        setLiveTradeData(res.data);
      } catch (err) {
        console.error("Error fetching live trade data: ", err);
      }
    };

    const fetchPastTrades = async () => {
      try {
        const res = await axios.get("http://localhost:3306/api/pastTrade");
        setPastTradeData(res.data);
      } catch (err) {
        console.error("Error fetching past trade data: ", err);
      }
    };

    fetchLiveTrades();
    fetchPastTrades();

    const interval = setInterval(() => {
      fetchLiveTrades();
      fetchPastTrades();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
              className={`scale__container ${
                selectedTag === "1D" ? "scale__active" : ""
              }`}
              style={{
                borderRadius: "4px 0 0 4px",
              }}
              onClick={() => handleTagSelect("1D")}
            >
              1D
            </div>
            <div
              className={`scale__container ${
                selectedTag === "7D" ? "scale__active" : ""
              }`}
              onClick={() => handleTagSelect("7D")}
            >
              7D
            </div>
            <div
              className={`scale__container ${
                selectedTag === "14D" ? "scale__active" : ""
              }`}
              onClick={() => handleTagSelect("14D")}
            >
              14D
            </div>
            <div
              className={`scale__container ${
                selectedTag === "30D" ? "scale__active" : ""
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
          {pastTradeData.slice(0, visibleCom).map((trade, index) => (
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
