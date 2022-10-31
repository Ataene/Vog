import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { fetchItems, fetchItem, fetchItemToEdit, fetchItemToDelete } from "../redux/ActionCreators";

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
              <hi
                style={{
                  color: "green",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 50,
                }}
              >
                {item.title.slice(0, 20)}
              </hi>
              <p
                style={{
                  color: "red",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.body.slice(0, 50)}
              </p>
              <p
                style={{
                  color: "red",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.id}
              </p>
            </div>
          ))}
      </div>
      <hr />
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <h1
        style={{
          color: "green",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Post begins here
      </h1>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginBottom: 20,
        }}
      >
        <button
          onClick={() => setOpenModal(true)}
          style={{ color: "green", fontSize: 20 }}
        >
          Open Modal
        </button>
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
            <hi
              style={{
                color: "green",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {selectedItem.title.slice(0, 20)}
            </hi>
            <p
              style={{
                color: "red",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {selectedItem.body.slice(0, 50)}
            </p>
            <p
              style={{
                color: "red",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {selectedItem.id}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default GetHome;
