import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postItem } from "../redux/ActionCreators";

const Modal = ({ closeModal }) => {
  const dataToPost = useSelector((state) => state.itemToPost);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [numberId, setNumberId] = useState("");

  const handlePost = async (event) => {
    event.preventDefault();
    dispatch(postItem({ title, body, numberId }));
    setTitle("");
    setBody("");
    setNumberId("");
  };

  const modalContainer = {
    with: "100vh",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alighnItems: "center",
  };
  const modalItem = {
    width: "500px",
    height: "150px",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  };

  return (
    <>
      <div style={modalContainer}>
        <form style={modalItem} onSubmit={handlePost}>
          <div>
            <button
              style={{ backgroundColor: "yellow" }}
              onClick={() => closeModal(false)}
            >
              Close
            </button>
          </div>
          <label>Enter Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter the title"
            type="text"
          />
          <label>Body</label>
          <input
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            placeholder="Enter the body"
            type="text"
          />
          <label>Enter Title</label>
          <input
            value={numberId}
            onChange={(e) => {
              setNumberId(e.target.value);
            }}
            type="number"
            placeholder="Enter user Id"
          />
          <div>
            <button type="submit" style={{ backgroundColor: "green" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
