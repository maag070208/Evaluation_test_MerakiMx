import React, { Component } from 'react'
import axios from 'axios';
export default class profile extends Component {

    state = {
        users: []
    }

   async componentDidMount(){
        const res = axios.get('http://localhost:3200/clientes');

        this.setState({users: (await res).data})
      
    }


    render() {
        return (
            <div>
                Perfil de usuario
            </div>
        )
    }
}


