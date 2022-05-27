import {
  EDIT_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_DATA_EDIT,
  HANDLE_ONCHANGE,
  SET_DATADEFAULT,
} from "../constants/product.constans";

export const updateProduct = (data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};

export const editDataProduct = (data) => {
  return {
    type: EDIT_PRODUCT,
    payload: data,
  };
};

export const updateDataEdit = () => {
  return {
    type: UPDATE_DATA_EDIT,
  };
};

export const handleOnChange = (target) => {
  return {
    type: HANDLE_ONCHANGE,
    payload: target,
  };
};

export const setDataDefault = () => {
  return {
    type: SET_DATADEFAULT,
  };
};
