import {
  REPAIR_PRODUCT,
  UPDATE_DATA_REPAIR,
  UPDATE_PRODUCT,
} from "../constants/product.constans";

const initialState = {
  dataProduct: [],
  dataRepair: null,
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCT: {
      state.dataProduct = payload;
      return { ...state };
    }

    case REPAIR_PRODUCT: {
      state.dataRepair = payload;
      return { ...state };
    }

    case UPDATE_DATA_REPAIR: {
      state.dataRepair = null;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
