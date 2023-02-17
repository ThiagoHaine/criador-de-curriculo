import React from "react";
import "./Home.css"

const Home = () => {

    return (
        <div className="body">
            <div className="text">
                <h1>Crie seu Currículo</h1>
                <sub>Seu currículo de maneira fácil</sub>
            </div>

            <section id="user-data">
                <div className="sign-in">
                    <form>
                        <input type="text" id="login" name="login" placeholder="Usuário"/>
                        <input type="password" id="password" name="password" placeholder="Senha"/>
                        <a href="">Não tenho uma conta, registrar | </a> <a href="" className="forgot-password">Esqueci minha senha</a>
                        <button type="button" className="login">Login</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;