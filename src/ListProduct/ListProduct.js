import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProduct } from "../redux/actions/product.actions";
import { productService } from "../service/product.service";
import FormProduct from "./FormProduct";
import ItemProduct from "./ItemProduct";

class ListProduct extends Component {
  componentDidMount() {
    productService
      .getDataProduct()
      .then((res) => {
        console.log(res);
        this.props.updateDataProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Product Exercise Axios</h1>
        <FormProduct />
        <h2 className="mt-5">List Product</h2>
        <ItemProduct />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateDataProduct: (value) => {
      dispatch(updateProduct(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(ListProduct);
