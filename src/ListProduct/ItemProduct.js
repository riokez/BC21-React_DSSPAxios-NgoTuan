import { message } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  repairDataProduct,
  updateProduct,
} from "../redux/actions/product.actions";
import { productService } from "../service/product.service";

class ItemProduct extends Component {
  deleteProduct = (id) => {
    productService
      .deleteDataProduct(id)
      .then((res) => {
        return productService.getDataProduct(res.data);
      })
      .then((res) => {
        console.log(res);
        this.props.updateDataProduct(res.data);
        message.success("Product data deletion successful");
      })
      .catch((err) => {
        console.log(err);
        message.error("Deletion of product data failed");
      });
  };

  repairProduct = (id) => {
    productService
      .getIdDataProduct(id)
      .then((res) => {
        console.log(res);
        this.props.repairProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderDataProduct = () => {
    return this.props.dataProduct.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <img src={item.img} alt={item.img} width={75} height={75} />
          </td>
          <td>{item.description}</td>
          <td className="d-flex">
            <button
              className="btn btn-warning"
              onClick={() => {
                this.repairProduct(item.id);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                this.deleteProduct(item.id);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table border={3} className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Manipulation</th>
            </tr>
          </thead>
          <tbody>{this.renderDataProduct()}</tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataProduct: state.dataProduct,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateDataProduct: (value) => {
      dispatch(updateProduct(value));
    },
    repairProduct: (data) => {
      dispatch(repairDataProduct(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduct);
