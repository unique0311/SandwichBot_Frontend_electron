import React from "react";

import linkedImage from "../img/linked.png";

const ChartBody = ({
  time,
  tx,
  swapFrom,
  swapTo,
  status,
  profit,
  change,
  index,
}) => {
  return (
    <div className="liveTrades__chartBody" key={index}>
      <div className="chartBody__title">{time}s</div>
      <div className="chartBody__title">
        {tx}
        <img src={linkedImage} style={{ marginLeft: "3px" }} />
      </div>
      <div className="chartBody__title">
        {swapFrom} <span style={{ color: "#919398" }}> &nbsp;>&nbsp; </span>{" "}
        {swapTo}{" "}
      </div>
      <div className="chartBody__title">{status}</div>
      <div className="chartBody__titleProfit">{profit}</div>
      <div className="chartBody__title">
        <div className="titleChange__back">{change}</div>
      </div>
    </div>
  );
};

export default ChartBody;
