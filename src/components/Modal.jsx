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

  return (
    <>
      <div className="modal-container">
        <form className="modal-item" onSubmit={handlePost}>
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => closeModal(false)}
            >
              Close
            </button>
          </div>
          <label>Title</label>
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
          <label>Number Id</label>
          <input
            value={numberId}
            onChange={(e) => {
              setNumberId(e.target.value);
            }}
            type="number"
            placeholder="Enter Number Id"
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
