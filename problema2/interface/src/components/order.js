import React, { Component } from "react";
import axios from "axios";
import "../../src/order.css";
export default class order extends Component {
  state = {
    pedidos: [],
  };

  async componentDidMount() {
    const res = axios.get("http://localhost:3200/pedidos");
    this.setState({ pedidos: (await res).data });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.pedidos.map((pedido) => (
          <div className="content-wrapper border">
            <div className="item-container">
              <div className="container">
                <div className="col-md-12">
                  <div className="product col-md-3 service-image-left mt-3">
                    <center>
                      <img src={pedido.Img} alt={pedido.NombrePedido}></img>
                    </center>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="product-title">
                    <h3>Nombre Producto: {pedido.NombrePedido}</h3>
                  </div>
                  <div className="product-desc">Fecha: {pedido.FechaPedido}</div>
                  <div className="product-desc"><h5>Nombre Cliente: {pedido.NombreCliente}</h5></div>
                  <div className="product-rating">
                    <i className="fa fa-star gold"></i>
                    <i className="fa fa-star gold"></i>
                    <i className="fa fa-star gold"></i>
                    <i className="fa fa-star gold"></i>
                    <i className="fa fa-star gold"></i>
                  </div>
                  <hr></hr>
                  <div className="product-price">${pedido.Total} </div>
                  <div className="product-stock">
                    Cantidad {pedido.Cantidad}
                  </div>
                  <hr></hr>
                  <div className="btn-group cart">
                    <button type="button" className="btn btn-success mb-2">
                      Pagar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
