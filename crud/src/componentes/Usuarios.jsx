import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { alerta } from '../functions';
import '../Usuarios.css';

export const Usuarios = () => {
    const url = 'https://api.escuelajs.co/api/v1/users';
    const [usuarios, setUsuarios] = useState([]);
    
    const getUsuarios = async () => {
        try {
            const response = await axios.get(url);
            setUsuarios(response.data);
        } catch (error) {
            alerta('Error al obtener usuarios');
        }
    }

    useEffect(() => {
        getUsuarios();
    }, []);   return (
        <div className='usuarios-container'>
            <h2>Lista de Usuarios</h2>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Perfil</th> 
                            <th>Nombre</th> 
                            <th>Rol</th> 
                            <th>Email</th>
                            <th>Password</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario, index) => (
                                <tr key={usuario.id}>
                                    <td>{index + 1}</td>
                                    <td><img src={usuario.avatar} alt='Avatar' className='avatar' /></td> 
                                    <td>{usuario.name}</td>
                                    <td>{usuario.role}</td> 
                                    <td>{usuario.email}</td>
                                    <td>*****</td> 
                                    
                                   
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
