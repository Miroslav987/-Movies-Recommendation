import { useState } from "react";
import "./login.scss";

import Filter from "../../Components/Navbar/Filter";
import rowImg from "../../img/row.png";
import delateImg from "../../img/delate.png";
import unvisibleImg from "../../img/unvisible.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="auth">
      <div className="authCart">
        <div className="authCart__wrapper">
          <div className="auth__icons">
            <span>
              <img src={rowImg} alt="" />
            </span>
            <span>
              <img src={delateImg} alt="" />
            </span>
          </div>
          <h4 className="auth__title">Авторизация</h4>

          <form className="auth__form">
            <input
              className="auth__form-input"
              type="email"
              placeholder="Логин"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="xxx">
              <input
                className="auth__form-input"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={unvisibleImg} alt="" />
            </div>
          </form>

          <div className="auth__password">
            <span>
              <Link to="/resetpasw">Сбросит пароля</Link>
            </span>
            <span>
              <Link>Забыли пароль?</Link>
            </span>
          </div>

          <div className="authCart__button">
            <button>
              <Link>Войти</Link>
            </button>

            <p>
              <Link to="/signup">Зарегистрироваться</Link>
            </p>
          </div>
        </div>
      </div>
      <Filter />
    </section>
  );
};

export default Login;
