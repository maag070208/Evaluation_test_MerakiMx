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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail border ml-5 mt-3">
                    <img
                      src={producto.Img}
                      className="img-responsive w-50"
                    >
                    </img>
                    <div className="caption bg-dark text-light">
                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                          <h3> {producto.Nombre} </h3>
                        </div>
                        <div className="col-md-6 col-xs-6 price">
                          <h3>
                            <label> ${producto.Precio} </label>
                          </h3>
                        </div>
                      </div>
                      <h5> Este bajo electrico es preferible usarlo en este estilo de musica {producto.Categoria} </h5>
                    </div>
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
