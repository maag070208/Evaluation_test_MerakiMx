import React, { Component } from "react";
import axios from "axios";
import '../../src/order.css'
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
      <div className="card ">
        {this.state.pedidos.map((pedido) => (
          <div class="container">
            <div class="product">
              <div class="img-container">
                <img src={pedido.Img}></img>
              </div>

              <div class="product-info">
                <div class="product-content">
                  <h1> {pedido.NombrePedido} </h1>
                  <p>
                   {pedido.NombreCliente}
                  </p>
                  <ul>
                    <li>Bajo Electrivco</li>
                    <li>Slap todo el dia</li>
                 
                  </ul>
                  <div class="buttons">
                    <a class="button add">
                     {pedido.Cantidad}
                    </a>
                    <a class="button add" id="price">
                      {pedido.Total}
                    </a>
                    <br></br>
                    <br></br>
                    <a class="button add" id="price">
                      {pedido.FechaPedido}
                    </a>

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
