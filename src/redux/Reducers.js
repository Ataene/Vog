import { ActionTypes } from "./ActionTypes";
const initialState = {
  items: [],
  selectedItem: null,
  itemToPost: null,
  itemToEdit: null,
  itemToDelete: null,
  getUniversity: [],
  countrySelect: [],
  postalInfo: null,
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
    case ActionTypes.FETCH_UNIVERSITY: //Question 3
      return { ...state, getUniversity: payload };
    case ActionTypes.COUNTRY_DROPDOWN:
      return { ...state, countrySelect: payload };
    case ActionTypes.SEARCH_POSTAL: //Question4
      return { ...state, postalInfo: payload };
    default:
      return state;
  }
};
