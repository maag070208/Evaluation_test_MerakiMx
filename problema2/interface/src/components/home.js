import React, { Component } from "react";
import axios from "axios";

export default class home extends Component {
  state = {
    productos: [],
  };

  async componentDidMount() {
    const res = axios.get("http://localhost:3200/productos");

    this.setState({ productos: (await res).data });
    console.log(res.data);
  }

  render() {
    return (
        <div className="card ">
          {this.state.productos.map((producto) => (
            <div className="card text-center">
            <div className="card-header mt-5  bg-primary">
             {producto.Id}
            </div>
            <div className="card-body  cardbg">
              <h5 className="card-title"> {producto.Nombre} </h5>
              <p className="card-text"> {producto.Categorias} </p>
              <a  className="card-text"> {producto.Precio} </a>
              <br></br>
              <a  className="btn btn-primary active mt-4"> Comprar </a>
            </div>
            <div className="card-footer text-muted cardbg">
              2 days ago
            </div>
          </div>
          ))}
        </div> 
    );
  }
}
