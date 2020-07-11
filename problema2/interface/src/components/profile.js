import React, { Component } from "react";
import axios from "axios";
import "../../src/profile.css";
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
      <section>
        {this.state.users.map((user) => (
          <div class="container">
            <div class="row"></div>
            <div class="container">
              <div class="row team-row">
                <div class="col-md-4 col-sm-6 team-wrap">
                  <div class="team-member text-center">
                    <div class="team-img">
                      <img
                        src={user.Img}
                        alt=""
                      ></img>
                      <div class="overlay-team">
                        <div class="team-details text-center">
                          <div class="socials mt-20">
                            <a href="#">
                              <i class="fa fa-trash-o " aria-hidden="true"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-pencil " aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 class="team-title"> {user.Nombre} </h6>
                    <h4> {user.Direccion} </h4>
                    <span> {user.Pais} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
