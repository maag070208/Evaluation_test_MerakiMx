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
      <div className="row">
        <ul className="list-group">
          {this.state.users.map((user) => (
            <div className="container w-100 p-3 ml-5" key={user._id}>
              <a  className="list-group-item list-group-item-action active pl-4 border">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{user.Nombre}</h5>
                  
                </div>
                <p className="mb-1">
                 {user.Direccion}
                </p>
                <small>{user.Pais}</small>
              </a>
             
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
