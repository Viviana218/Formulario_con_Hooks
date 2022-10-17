import React, { useState } from "react";

const Formulario = () => {

    //creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [password2, setPassword2] =useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);

    const crearUsuario = e => {
        e.preventDefault(); //prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, email, password, password2}; //creando un objeto/diccionario con todas las variables que creamos previamente. Puede ser solo firstName, lastName y age o ponerle un nombre diferente a cada uno
        console.log("Nuevo registro:", nuevoUsuario);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setHizoSubmit(true);
    }

    const mensaje = () => {
        if (!hizoSubmit) {
            return (
                <div className="card">
                    <h3>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm password: {password2}</p>
                </div>
            );
        } else {
        return (
            <h3>¡Ingresaste tus datos correctamente!</h3>
        )
        }
    }

return (
    <form onSubmit={crearUsuario}>
        <div className="form-group">
            <label>Nombre:</label>
            <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
        </div>
        <div className="form-group">
            <label>Apellido:</label>
            <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>
        <div className="form-group">
            <label>Confirma Password:</label>
            <input className="form-control" type="password" onChange={(e) => setPassword2(e.target.value)} value={password2}/>
        </div>
        <input type="submit" className="btn btn-success" value="Crear usuario" />
        <br/>
        {mensaje()}

    </form>
)

}

export default Formulario;