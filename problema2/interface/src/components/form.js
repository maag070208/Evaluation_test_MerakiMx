import React, { Component } from 'react'
import axios from "axios";
export default class form extends Component {

    state = {
        Nombre: "",
        Direccion: "",
        Pais: "",
        Img: "",
        users: [],
        _id: "",
      };
    

      onSubmit = async (e) =>{
        e.preventDefault();
          const newUser = {
              nombre: this.state.Nombre,
              direccion: this.state.Direccion,
              pais: this.state.Pais,
              img: this.state.Img
          };
      const res =  await axios.post('http://localhost:3200/clientes', newUser);
         console.log(res);
         window.location.href = '/clientes';

      }

      onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
      
    render() {
        return (
           <div className="col-md-6 offset-md3">
               <div className="card card-body mt-4">
                   <h4>Agregar Cliente</h4>
                   <form onSubmit={this.onSubmit}>

                       <input   onChange={this.onInputChange} type="text" className="form-control mt-3" placeholder="Nombre Cliente" name="Nombre" value={this.state.Nombre} required/>
                       <input   onChange={this.onInputChange} type="text" className="form-control mt-3" placeholder="Direccion" name="Direccion" value={this.state.Direccion} required/>
                       <input   onChange={this.onInputChange} type="text" className="form-control mt-3" placeholder="Pais" name="Pais" value={this.state.Pais} required/>
                       <input   onChange={this.onInputChange} type="text" className="form-control mt-3" placeholder="URL Image" name="Img" value={this.state.Img} required/>
                       <button  onChange={this.onInputChange} type="submit" className="btn btn-primary mt-3">Guardar</button>

                   </form>
               </div>
           </div>
        )
    }
}
