import React, { useState } from "react";
import Axios from "axios";

const Modal = ({ show, close }) => {
  const [addressValue, setAddressValue] = useState("");
  const [pkAddressValue, setPkAddressValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3306/api/data", {
        pubKey: addressValue,
        priKey: pkAddressValue,
      });
      // alert("Data saved successfully!!!");
      close();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      {show ? (
        <div className="modalContainer">
          <div className="modalBackground" onClick={() => close()} />
          <form className="modal" onSubmit={handleSubmit}>
            <div className="modal__title">
              <p>Settings</p>
              <p style={{ cursor: "pointer" }} onClick={() => close()}>
                ⨉
              </p>
            </div>
            <div className="walletAddress__container">
              <p>Wallet Address</p>
              <input
                placeholder="0xcd81917ff5313d02d7da3d47a9afcd3f635c36e3"
                type="text"
                value={addressValue}
                onChange={(e) => setAddressValue(e.target.value)}
              />
            </div>
            <div className="walletAddress__container">
              <p>Private Key</p>
              <input
                placeholder="0xcd81917ff5313d02d7da3d47a9afcd3f635c36e3"
                type="text"
                value={pkAddressValue}
                onChange={(e) => setPkAddressValue(e.target.value)}
              />
            </div>
            <button
              className="modalSave__button"
              type="submit"
              // onClick={() => close()}
            >
              Import
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
