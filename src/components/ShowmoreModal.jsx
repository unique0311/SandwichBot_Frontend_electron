import React from "react";

import ChartHeader from "./ChartHeader.jsx";
import ChartBody from "./Chart.jsx";

const ShowmoreModal = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="showmoreModalContainer">
          <div className="modalBackground" onClick={() => close()} />
          <div className="showmoremodal">
            <div className="showmoreModal__title">
              <div className="modal__pastTrades">
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
              <p style={{ cursor: "pointer" }} onClick={() => close()}>
                ⨉
              </p>
            </div>
            <ChartHeader />
            <div className="trades__mainInfo">
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="In Progress"
                profit="+0.2 ETH ($312)"
                change="+50%"
              />
              <ChartBody
                time="1"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
              />
              <ChartBody
                time="4"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
              />
              <ChartBody
                time="5"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Error"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="In Progress"
                profit="+0.2 ETH ($312)"
                change="+50%"
              />
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
              <ChartBody
                time="2"
                tx="0xd89d...1dac"
                swapFrom="ETH"
                swapTo="PEPE"
                status="Filled"
                profit="+0.2 ETH ($312)"
                change="+50%"
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShowmoreModal;
