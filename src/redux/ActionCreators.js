import { ActionTypes } from "./ActionTypes";

//HOME PAGE - display Posts
export const fetchItems = () => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20`;

  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();

      dispatch({ type: ActionTypes.FETCH_ITEMS, payload: responseData });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//Handle Post request
export const postItem = ({ title, body, numberId }) => {
  const newData = {
    title,
    body,
    numberId,
  };
  const data = JSON.stringify(newData);
  const dataUrl = `https://jsonplaceholder.typicode.com/posts`;
  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
      if (response === 200 ){
        return response;
      } else {
        console.log("error in post request")
      }
      dispatch({ type: ActionTypes.POST_ITEM, payload: response });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//Get a single Item by ID
export const fetchItem = (id) => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();
      dispatch({ type: ActionTypes.FETCH_ITEM, payload: responseData });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//Item to Edit
export const fetchItemToEdit = (id) => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();
      dispatch({ type: ActionTypes.EDIT_SELECTED_ITEM, payload: responseData });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//Item to Delete
export const fetchItemToDelete = (id) => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();
      dispatch({
        type: ActionTypes.DELETE_SELECTED_ITEM,
        payload: responseData,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
