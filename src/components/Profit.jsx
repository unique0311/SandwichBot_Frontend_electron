import React, { useState, useEffect } from "react";

const Profit = () => {
  const [profit, setProfit] = useState(0);

  const fetchProfit = async () => {
    try {
      const res = await fetch("http://localhost:3306/api/profit");
      const profit = await res.json();
      if (profit) {
        setProfit(profit);
      } else {
        console.error("didn't import profit");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProfit();

    const interval = setInterval(() => {
      fetchProfit();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profit__container">
      <p style={{ color: "white", paddingBottom: "16px" }}>Profit</p>
      <div className="profit__main">
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>1 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>
            +{profit.toFixed(4)} ETH (${(profit * 3680).toFixed(2)})
          </p>
          <p style={{ color: "#919398", fontSize: "14px" }}>100% Win Rate</p>
          <p style={{ color: "#919398", fontSize: "12px" }}>0 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>7 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>
            +{profit.toFixed(4)} ETH (${(profit * 3680).toFixed(2)})
          </p>
          <p style={{ color: "#919398", fontSize: "14px" }}>100% Win Rate</p>
          <p style={{ color: "#919398", fontSize: "12px" }}>0 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>14 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>
            +{profit.toFixed(4)} ETH (${(profit * 3680).toFixed(2)})
          </p>
          <p style={{ color: "#919398", fontSize: "14px" }}>100% Win Rate</p>
          <p style={{ color: "#919398", fontSize: "12px" }}>0 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>30 Day</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>
            +{profit.toFixed(4)} ETH (${(profit * 3680).toFixed(2)})
          </p>
          <p style={{ color: "#919398", fontSize: "14px" }}>100% Win Rate</p>
          <p style={{ color: "#919398", fontSize: "12px" }}>0 errors</p>
        </div>
        <div className="dayToDay__profit">
          <p style={{ color: "white", fontSize: "14px" }}>All Time</p>
          <p style={{ color: "#76DB8C", fontSize: "14px" }}>
            +{profit.toFixed(4)} ETH (${(profit * 3680).toFixed(2)})
          </p>
          <p style={{ color: "#919398", fontSize: "14px" }}>100% Win Rate</p>
          <p style={{ color: "#919398", fontSize: "12px" }}>0 errors</p>
        </div>
      </div>
    </div>
  );
};

export default Profit;
