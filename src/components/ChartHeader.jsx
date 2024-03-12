import React from "react";
import sortImage from "../img/sort.png";

const ChartHeader = () => {
  return (
    <div className="liveTrades__chartHeader">
      <div className="chartHeader__title">
        Tx Time
        <img
          src={sortImage}
          style={{ paddingLeft: "5px", cursor: "pointer" }}
        />
      </div>
      <div className="chartHeader__title">
        Tx Hash
        <img
          src={sortImage}
          style={{ paddingLeft: "5px", cursor: "pointer" }}
        />
      </div>
      <div className="chartHeader__title">
        Swap
        <img
          src={sortImage}
          style={{ paddingLeft: "5px", cursor: "pointer" }}
        />
      </div>
      <div className="chartHeader__title">
        Status
        <img
          src={sortImage}
          style={{ paddingLeft: "5px", cursor: "pointer" }}
        />
      </div>
      <div className="chartHeader__title">
        Profit
        <img
          src={sortImage}
          style={{ paddingLeft: "5px", cursor: "pointer" }}
        />
      </div>
      <div className="chartHeader__title">
        % Change
        <img
          src={sortImage}
          style={{ paddingLeft: "5px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ChartHeader;
