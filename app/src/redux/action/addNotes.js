import { SET_NOTES } from "./types";

export const setNotes = (data, dispatch) => {
  try {
    dispatch({
      type: SET_NOTES,
      data: data,
    });
    return true;
  } catch (err) {
    return false;
  }
};
