import {
  REPAIR_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_DATA_REPAIR,
} from "../constants/product.constans";

export const updateProduct = (data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};

export const repairDataProduct = (data) => {
  return {
    type: REPAIR_PRODUCT,
    payload: data,
  };
};

export const updateDataRepair = () => {
  return {
    type: UPDATE_DATA_REPAIR,
  };
};
