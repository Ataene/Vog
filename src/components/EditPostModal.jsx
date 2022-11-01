import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemToEdit } from "../redux/ActionCreators";

const EditPostModal = ({ closeModal, editItem }) => {
  const dataToPost = useSelector((state) => state.itemToEdit);
  console.log("111", editItem);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [numberId, setNumberId] = useState("");

  const handleEditPost = async (event) => {
    event.preventDefault();
    const editPost = {
      title,
      body,
      numberId,
    };
    dispatch(fetchItemToEdit(editPost));
    setTitle("");
    setBody("");
    setNumberId("");
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setBody(editItem.body);
      setNumberId(editItem.numberId);
    }
  }, [editItem]);

  return (
    <>
      <div className="modal-container">
        <form className="modal-item" onSubmit={handleEditPost}>
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => closeModal(false)}
            >
              Close Edit
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

export default EditPostModal;
