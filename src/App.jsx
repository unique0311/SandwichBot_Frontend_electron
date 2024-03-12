import React, { useState } from "react";

import ChartBody from "./components/Chart.jsx";
import ChartHeader from "./components/ChartHeader.jsx";
import Header from "./components/Header.jsx";
import Profit from "./components/Profit.jsx";
// import ShowmoreModal from "./components/ShowmoreModal.jsx";
import PastTrades from "./components/PastTrade.jsx";

function App() {
  const [showMore, setShowMore] = useState(false);
  // const Switch = () => setShowMore(!showMore);
  const [visibleCom, setVisibleCom] = useState(8);

  const showMoreComponents = () => {
    setVisibleCom((prevVisibleComponents) => prevVisibleComponents + 7);
  };

  return (
    <div className="container">
      <Header />
      <Profit />
      <div className="liveTrades__container">
        <p className="liveTrades__title">Live Trades •</p>
        <ChartHeader />
        <ChartBody
          time="1"
          tx="0xd89d...1dac"
          swapFrom="HEMULE"
          swapTo="WETH"
          status="In Progress"
          profit="+0.2 ETH ($312)"
          change="+58%"
        />
        <ChartBody
          time="2"
          tx="0xd89d...1dac"
          swapFrom="ETH"
          swapTo="PEPE"
          status="In Progress"
          profit="+0.2 ETH ($312)"
          change="+50%"
        />
      </div>
      <div className="pastTrades__container">
        <div className="pastTrades__title">
          <p>Past Trades</p>
          <div className="pastTrades__scale">
            <div
              className="scale__container"
              style={{ borderRadius: "4px 0 0 4px" }}
            >
              1D
            </div>
            <div className="scale__container">7D</div>
            <div className="scale__container">14D</div>
            <div
              className="scale__container"
              style={{ borderRadius: "0 4px 4px 0" }}
            >
              30D
            </div>
          </div>
        </div>
        <ChartHeader />
        <div className="trades__mainInfo">
          {PastTrades.slice(0, visibleCom).map((component, index) => (
            <ChartBody
              key={index}
              content={component}
              time="2"
              tx="0xd89d...1dac"
              swapFrom="ETH"
              swapTo="PEPE"
              status="In Progress"
              profit="+0.2 ETH ($312)"
              change="+50%"
            />
          ))}
        </div>
        <div className="showmore__container">
          {visibleCom <= PastTrades.length && (
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
