import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  fetchItems,
  fetchItem,
  fetchItemToEdit,
  fetchItemToDelete,
} from "../redux/ActionCreators";

const GetHome = () => {
  const items = useSelector((state) => state.items);
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleSearch = () => {
    dispatch(fetchItem(search));
  };

  return (
    <>
      <div>
        {items &&
          items.slice(0, 2).map((item) => (
            <div key={item.id}>
              <h1>T{item.title.slice(0, 20)}</h1>
              <p>{item.body.slice(0, 50)}</p>
              <p>{item.id}</p>
            </div>
          ))}
      </div>
      <hr />
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <h1>Post begins here</h1>
      <div>
        <button onClick={() => setOpenModal(true)}>Open Modal</button>
      </div>
      <div>{openModal && <Modal closeModal={setOpenModal} />}</div>
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <hr />
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Search Items"
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <div style={{ marginBottom: "20px" }}>
        {selectedItem && (
          <div key={selectedItem.id}>
            <h1>{selectedItem.title.slice(0, 20)}</h1>
            <p>{selectedItem.body.slice(0, 50)}</p>
            <p>{selectedItem.id}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GetHome;
