import React from "react";

const Profit = () => {
  return (
    <div className="profit__container">
      <p style={{ color: "white", paddingBottom: "16px" }}>Profit</p>
      <div className="profit__main">
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>1 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>+4 ETH ($15.5k)</p>
          <p style={{ color: "#919398", fontSize: "14px" }}>
            89% Win Rate (12/18)
          </p>
          <p style={{ color: "#919398", fontSize: "12px" }}>25 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>7 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>+4 ETH ($15.5k)</p>
          <p style={{ color: "#919398", fontSize: "14px" }}>
            89% Win Rate (12/18)
          </p>
          <p style={{ color: "#919398", fontSize: "12px" }}>5 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>14 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>+4 ETH ($15.5k)</p>
          <p style={{ color: "#919398", fontSize: "14px" }}>
            89% Win Rate (12/18)
          </p>
          <p style={{ color: "#919398", fontSize: "12px" }}>25 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>30 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>+4 ETH ($15.5k)</p>
          <p style={{ color: "#919398", fontSize: "14px" }}>
            89% Win Rate (12/18)
          </p>
          <p style={{ color: "#919398", fontSize: "12px" }}>0 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>All Time</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>+4 ETH ($15.5k)</p>
          <p style={{ color: "#919398", fontSize: "14px" }}>
            89% Win Rate (12/18)
          </p>
          <p style={{ color: "#919398", fontSize: "12px" }}>25 errors</p>
        </div>
      </div>
    </div>
  );
};

export default Profit;
