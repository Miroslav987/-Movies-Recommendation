import { useState } from "react";
import "./signUp.scss";

import rowImg from "../../img/row.png";
import unvisibleImg from "../../img/unvisible.png";
import visibleImg from "../../img/visible.png";
import delateImg from "../../img/delate.png";
import { Link } from "react-router-dom";
import { Filter } from "../Navbar/Filter";

const SignUp = () => {
  return (
    <section className="auth">
      <div className="authCart">
        <div className="authCart__wrapper">
          <div className="auth__icons">
            <span>
              <Link to="/">
                <img src={delateImg} alt="" />
              </Link>
            </span>
            <span>
              <img src={delateImg} alt="" />
            </span>
          </div>
          <h4 className="auth__title">Регистрация</h4>

          <form className="auth__form">
            <input
              className="auth__form-input"
              type="text"
              placeholder="Логин"
            />
            <div className="xxx">
              <input
                className="auth__form-input"
                type="password"
                placeholder="Пароль"
              />
              <img src={unvisibleImg} alt="" />
            </div>
            <div className="xxx">
              <input
                className="auth__form-input"
                type="text"
                placeholder="Секретное слова"
              />
              <img src={visibleImg} alt="" />
            </div>
            <div className="checkbox">
              <input className="checkbox__input" type="checkbox" id="ckeck" />
              <label className="checkbox__label" for="check">
                Запомнить меня
              </label>
            </div>
          </form>

          <div className="authCart__button">
            <button>
              <Link>Войти</Link>
            </button>
          </div>
        </div>
      </div>
      <Filter />
    </section>
  );
};

export default SignUp;
