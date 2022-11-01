import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  fetchItems,
  fetchItem,
  fetchItemToDelete,
} from "../redux/ActionCreators";
import EditPostModal from "./EditPostModal";

const GetHome = () => {
  const items = useSelector((state) => state.items);
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchItems());
  });

  const handleSearch = () => {
    if (search === "") {
      setError("Please enter an id to begin search");
      return;
    }
    dispatch(fetchItem(search));
  };

  const handleDelete = () => {
    dispatch(fetchItemToDelete());
    alert("item Deleted");
  };
  // Note: For a very large page, each of the SECTIONS can be separated into it's own component.
  return (
    <>
      <section>
        <div>
          <h1>
            Items List, limit of five (5) for easy scrolling and reduced word
            counts
          </h1>
          {items &&
            items.slice(0, 5).map((item) => (
              <div key={item.id}>
                <p>{item.title.slice(0, 20)}</p>
                <p>{item.body.slice(0, 50)}</p>
                <p>{item.id}</p>
              </div>
            ))}
        </div>
      </section>
      <hr />
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <section>
        <h1>Items to Post begins here</h1>
        <div>
          <button onClick={() => setOpenModal(true)}>Open Modal</button>
        </div>
        <div>{openModal && <Modal closeModal={setOpenModal} />}</div>
      </section>
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <hr />
      <section>
        <h1>Enter an Id to search details, scroll for modal</h1>
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
        <h4 style={{ color: "red" }}>{error}</h4>
        <div style={{ marginBottom: "20px" }}>
          {selectedItem && (
            <div key={selectedItem.id}>
              <h1>{selectedItem.title.slice(0, 20)}</h1>
              <p>{selectedItem.body.slice(0, 50)}</p>
              <p>{selectedItem.id}</p>
              <button onClick={() => setOpenEditModal(true)}>Edit Post</button>
              <button type="button" onClick={() => handleDelete(selectedItem)}>
                Delete Post
              </button>
              <div>
                {openEditModal && (
                  <EditPostModal
                    closeModal={setOpenEditModal}
                    editItem={selectedItem}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GetHome;
