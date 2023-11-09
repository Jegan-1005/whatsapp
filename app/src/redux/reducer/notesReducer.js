//import types
import { SET_NOTES, UPDATE_NOTES } from "../action/types";

const initialValue = [];

const UpdateNotes = (state = initialValue, action) => {
  switch (action.type) {
    case SET_NOTES:
      return action.data;
    //  return {
    //   ...state,
    //   ...action.data,
    // };
    default:
      return state;
  }
};

export default UpdateNotes;
