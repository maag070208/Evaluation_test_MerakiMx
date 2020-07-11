import React, { Component } from "react";
import axios from "axios";
import "../../src/home.css";
import { Link } from "react-router-dom";
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
      <div className="container">
        {this.state.productos.map((producto) => (
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="product-grid">
                <div class="product-image">
                  <a>
                    <img class="pic-1" src={producto.Img}></img>
                    <img class="pic-2" src={producto.Img}></img>
                  </a>
                  <ul class="social">
                    <li>
                      <Link to="/pedidos" data-tip="Add to Cart">
                        <i class="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                  <span class="product-new-label">Sale</span>
                  <span class="product-discount-label">20%</span>
                </div>
                <ul class="rating mb-5">
                  <li class="fa fa-star"></li>
                  <li class="fa fa-star"></li>
                  <li class="fa fa-star"></li>
                  <li class="fa fa-star"></li>
                  <li class="fa fa-star"></li>
                </ul>
                <div class="product-content">
                  <h3 class="title">
                    <h3> {producto.Nombre} </h3>
                  </h3>
                  <div class="price">
                    ${producto.Precio}
                    <span>$3000</span>
                  </div>
                  <Link class="add-to-cart" to="/pedidos">
                    + Add To Cart
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
