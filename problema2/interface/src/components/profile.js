import React, { Component } from "react";
import axios from "axios";
export default class profile extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = axios.get("http://localhost:3200/clientes");

    this.setState({ users: (await res).data });
    console.log(res.data);
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 text-light">
                <div className="well well-sm  bg-dark">
                  <div className="row border mt-5  bg-dark">
                    <div className="col-sm-6 col-md-4">
                      <img
                        src={user.Img}
                        alt=""
                        className="img-rounded img-responsive w-75"
                      />
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <h4> {user.Nombre} </h4>
                      <small>
                        <cite title="San Francisco, USA">
                         
                          {user.Direccion}
                          <i className="glyphicon glyphicon-map-marker"></i>
                        </cite>
                      </small>
                      <p>
                        <i className="glyphicon glyphicon-gift"></i>{user.Pais}
                      </p>

                      <div className="btn-group">
                        <button  type="button" className="btn btn-primary">
                          Perfil
                        </button>
                      </div>
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
