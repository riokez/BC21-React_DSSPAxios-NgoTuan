import { message } from "antd";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  updateProduct,
  updateDataRepair,
} from "../redux/actions/product.actions";
import { productService } from "../service/product.service";

class FormProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      img: "",
      description: "",
    };
    this.nameRef = createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleOnChange = (target) => {
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  stateDefault = () => {
    this.setState({
      name: "",
      price: "",
      img: "",
      description: "",
    });
  };

  handleAddProduct = (data) => {
    productService
      .postDataProduct(data)
      .then((res) => {
        return productService.getDataProduct(res.data);
      })
      .then((res) => {
        console.log(res);
        this.props.updateDataProduct(res.data);
        message.success("Successfully added product data");
        this.stateDefault();
      })
      .catch((err) => {
        console.log(err);
        message.error("Adding failed product data");
      });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.dataRepair,
    });
  }

  handleUpdate = (data) => {
    productService
      .putDataProduct(data.id, data)
      .then((res) => {
        return productService.getDataProduct(res.data);
      })
      .then((res) => {
        console.log(res);
        this.props.updateDataProduct(res.data);
        this.props.updateDataRepair();
        message.success("Successfully updated product data");
        this.stateDefault();
      })
      .catch((err) => {
        console.log(err);
        message.error("Product Data Update Failed");
      });
  };

  render() {
    return (
      <div className="text-left font-weight-bold">
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              ref={this.nameRef}
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={this.state.name}
              aria-describedby="helpId"
              onChange={(e) => {
                this.handleOnChange(e.target);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="price"
              value={this.state.price}
              aria-describedby="helpId"
              onChange={(e) => {
                this.handleOnChange(e.target);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Image</label>
            <input
              type="text"
              className="form-control"
              name="img"
              id="img"
              value={this.state.img}
              aria-describedby="helpId"
              onChange={(e) => {
                this.handleOnChange(e.target);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              value={this.state.description}
              aria-describedby="helpId"
              onChange={(e) => {
                this.handleOnChange(e.target);
              }}
            />
          </div>
        </form>
        {this.props.dataRepair === null ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              this.handleAddProduct(this.state);
            }}
          >
            Add Product
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleUpdate(this.state);
            }}
          >
            Update
          </button>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataRepair: state.dataRepair,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateDataProduct: (value) => {
      dispatch(updateProduct(value));
    },
    updateDataRepair: () => {
      dispatch(updateDataRepair());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduct);
