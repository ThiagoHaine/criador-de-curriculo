import React from "react";
import "../Home/Home.css"

const Register = () => {

    return (
        <div className="body">
            <div className="text">
                <h1>Registre-se</h1>
                <sub>Seu currículo de maneira fácil</sub>
            </div>

            <section id="user-data">
                <div className="sign-in">
                    <form>
                        <input type="text" id="name" name="name" placeholder="Nome Completo"/>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                        <input type="text" id="login" name="login" placeholder="Usuário"/>
                        <input type="password" id="password" name="password" placeholder="Senha"/>
                        <button type="button" className="cancel-btn">←</button>
                        <button type="button" className="login">Registrar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Register;