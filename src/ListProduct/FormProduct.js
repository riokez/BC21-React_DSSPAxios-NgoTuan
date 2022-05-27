import { message } from "antd";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  updateProduct,
  updateDataEdit,
  handleOnChange,
  setDataDefault,
} from "../redux/actions/product.actions";
import { productService } from "../service/product.service";

class FormProduct extends Component {
  constructor() {
    super();

    this.nameRef = createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleAddProduct = (data) => {
    productService
      .postDataProduct(data)
      .then((res) => {
        return productService.getDataProduct(res.data);
      })
      .then((res) => {
        console.log(res);
        this.props.updateDataProduct(res.data);
        this.props.setDataDefault();
        message.success("Successfully added product data");
      })
      .catch((err) => {
        console.log(err);
        message.error("Adding failed product data");
      });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.dataEdit) {
      this.setState({
        ...nextProps.dataEdit,
      });
    }
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
        this.props.updateDataEdit();
        this.props.setDataDefault();
        message.success("Successfully updated product data");
      })
      .catch((err) => {
        console.log(err);
        message.error("Product Data Update Failed");
      });
  };

  render() {
    let { dataDefault, handleOnChange, dataEdit } = this.props;
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
              value={dataDefault.name}
              aria-describedby="helpId"
              onChange={(e) => {
                handleOnChange(e.target);
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
              value={dataDefault.price}
              aria-describedby="helpId"
              onChange={(e) => {
                handleOnChange(e.target);
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
              value={dataDefault.img}
              aria-describedby="helpId"
              onChange={(e) => {
                handleOnChange(e.target);
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
              value={dataDefault.description}
              aria-describedby="helpId"
              onChange={(e) => {
                handleOnChange(e.target);
              }}
            />
          </div>
        </form>
        {dataEdit === null ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              this.handleAddProduct(dataDefault);
            }}
          >
            Add Product
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleUpdate(dataDefault);
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
    dataEdit: state.dataEdit,
    dataDefault: state.dataDefault,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateDataProduct: (value) => {
      dispatch(updateProduct(value));
    },
    updateDataEdit: () => {
      dispatch(updateDataEdit());
    },
    handleOnChange: (target) => {
      dispatch(handleOnChange(target));
    },
    setDataDefault: () => {
      dispatch(setDataDefault());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduct);
