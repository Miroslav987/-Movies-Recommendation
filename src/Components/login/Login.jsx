import { useState } from "react";
import "./login.scss";

import rowImg from "../../img/row.png";
import delateImg from "../../img/delate.png";
import unvisibleImg from "../../img/unvisible.png";
import { Link } from "react-router-dom";
import { Filter } from "../Navbar/Filter";
// import Filter from "../../Components/Navbar/Filter";

export const Login = () => {
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
              <Link to="/">
                <img src={delateImg} alt="" />
              </Link>
            </span>
          </div>
          <h4 className="auth__title">Авторизация</h4>

          <form className="auth__form">
            <input
              className="auth__form-input"
              type="email"
              placeholder="Логин"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="xxx">
              <input
                className="auth__form-input"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <img src={unvisibleImg} alt="" />
            </div>
          </form>

          <div className="auth__password">
            <span>
              <Link to="/reset/password">Сбросит пароля</Link>
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
              <Link to="/auth">Зарегистрироваться</Link>
            </p>
          </div>
        </div>
      </div>
      <Filter />
    </section>
  );
};
