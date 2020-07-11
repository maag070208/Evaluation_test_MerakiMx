import React, { Component } from "react";
import axios from "axios";
import "../../src/home.css";
import { Link } from "react-router-dom";
export default class home extends Component {
  //definiendo estado
  state = {
    productos: [],
  };

  /*
  componentDidMount: Este método solo se ejecuta justo después 
  de que el componente haya sido montado en el DOM.
  
  */
  async componentDidMount() {
    //Consumiendo la API
    const res = axios.get("http://localhost:3200/productos");
    this.setState({ productos: (await res).data });
  }

  render() {
    return (
      <div className="col-md-8 p-2" >
        {this.state.productos.map((producto) => (
          <div className="row">
            <div className="col-md-3 col-sm-6" key={producto.id}>
              <div className="product-grid">
                <div className="product-image">
                  <a>
                    <img className="pic-1" src={producto.Img}></img>
                    <img className="pic-2" src={producto.Img}></img>
                  </a>
                  <ul className="social">
                    <li>
                      <Link to="/pedidos" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">20%</span>
                </div>
                <ul className="rating mb-5">
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                  <li className="fa fa-star"></li>
                </ul>
                <div className="product-content">
                  <a className="title">
                    <h3> {producto.Nombre} </h3>
                  </a>
                  <div className="price">
                    ${producto.Precio}
                    <span>$3000</span>
                  </div>
                  <Link className="add-to-cart" to="/pedidos">
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
