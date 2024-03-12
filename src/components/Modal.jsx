import React, { useState } from "react";
import { Axios } from "axios";

const Modal = ({ show, close }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:5000/api/data", { data: inputValue });
      alert("Data saved successfully");
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="walletAddress__container">
              <p>Private Key</p>
              <input placeholder="0xcd81917ff5313d02d7da3d47a9afcd3f635c36e3" />
            </div>
            <button className="modalSave__button" type="submit">
              Save
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
