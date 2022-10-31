import { ActionTypes } from "./ActionTypes";
const initialState = {
  items: [],
  selectedItem: null,
  itemToPost: null,
  itemToEdit: null,
  itemToDelete: null,
};

//Reducer function
export const itemReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case ActionTypes.FETCH_ITEMS:
      return { ...state, items: payload };
    case ActionTypes.POST_ITEM:
      return { ...state, itemToPost: payload };
    case ActionTypes.EDIT_SELECTED_ITEM:
      return { ...state, itemToEdit: payload };
    case ActionTypes.DELETE_SELECTED_ITEM:
      return { ...state, itemToDelete: payload };
    case ActionTypes.FETCH_ITEM:
      return { ...state, selectedItem: payload };
    default:
      return state;
  }
};
