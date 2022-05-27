import {
  EDIT_PRODUCT,
  HANDLE_ONCHANGE,
  SET_DATADEFAULT,
  UPDATE_DATA_EDIT,
  UPDATE_PRODUCT,
} from "../constants/product.constans";

const initialState = {
  dataProduct: [],
  dataEdit: null,
  dataDefault: {
    name: "",
    price: "",
    img: "",
    description: "",
  },
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCT: {
      state.dataProduct = payload;
      return { ...state };
    }

    case EDIT_PRODUCT: {
      let dataDefaultNew = { ...state.dataDefault };
      dataDefaultNew = payload;
      state.dataDefault = dataDefaultNew;
      state.dataEdit = dataDefaultNew;
      return { ...state };
    }

    case UPDATE_DATA_EDIT: {
      state.dataEdit = null;
      return { ...state };
    }

    case HANDLE_ONCHANGE: {
      let name = payload.name;
      let value = payload.value;
      let dataDefaultNew = { ...state.dataDefault, [name]: value };
      state.dataDefault = dataDefaultNew;
      return { ...state };
    }

    case SET_DATADEFAULT: {
      state.dataDefault = {
        name: "",
        price: "",
        img: "",
        description: "",
      };
      return { ...state };
    }

    default:
      return { ...state };
  }
};
