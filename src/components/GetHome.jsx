import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  fetchItems,
  fetchItem,
  fetchItemToDelete,
  fetchItemToEdit,
} from "../redux/ActionCreators";
import EditPostModal from "./EditPostModal";

const GetHome = () => {
  const items = useSelector((state) => state.items);
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const handleSearch = () => {
    dispatch(fetchItem(search));
  };

  const handleDelete = () => {
    dispatch(fetchItemToDelete());
    alert("item Deleted");
  };
  //Note: For a very large page, each of the sections can be separated into a different component.
  return (
    <>
      <section>
        <div>
          {items &&
            items.slice(0, 2).map((item) => (
              <div key={item.id}>
                <h1>{item.title.slice(0, 20)}</h1>
                <p>{item.body.slice(0, 50)}</p>
                <p>{item.id}</p>
              </div>
            ))}
        </div>
      </section>
      <hr />
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <section>
        <h1>Post begins here</h1>
        <div>
          <button onClick={() => setOpenModal(true)}>Open Modal</button>
        </div>
        <div>{openModal && <Modal closeModal={setOpenModal} />}</div>
      </section>
      {/* Below can be separated into a different component, if the file get larger, for scalability */}
      <hr />
      <section>
        <h1>Enter an Id to search details</h1>
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
