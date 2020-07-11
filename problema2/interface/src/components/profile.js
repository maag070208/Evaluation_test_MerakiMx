import React, { Component } from "react";
import axios from "axios";
import "../../src/profile.css";
import {Link} from 'react-router-dom';
export default class profile extends Component {
  state = {
    Nombre: "",
    Direccion: "",
    Pais: "",
    Img: "",
    users: [],
    id: "",
  };

   componentDidMount() {
   this.getUser();
  }

  async getUser(){
    const res = axios.get("http://localhost:3200/clientes");
    this.setState({ users: (await res).data });
  }

  render() {
    return (
      <div className="col-md-8 p-2">
        {this.state.users.map((user) => (
          <div className="container">
            <div className="row"></div>
            <div className="container">
              <div className="row team-row">
                <div className="col-md-4 col-sm-6 team-wrap">
                  <div className="team-member text-center">
                    <div className="team-img">
                      <img src={user.Img} alt=""></img>
                      <div className="overlay-team">
                        <div className="team-details text-center">
                          <div className="socials mt-20">
                            <Link to="/form">
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="team-title"> {user.Nombre} </h6>
                    <h4> {user.Direccion} </h4>
                    <span> {user.Pais} </span>
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
