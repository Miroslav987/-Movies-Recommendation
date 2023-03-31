import { useState } from "react";

// import Filter from "../../Components/Navbar/Filter";
import rowImg from "../../img/row.png";
import delateImg from "../../img/delate.png";
import unvisibleImg from "../../img/unvisible.png";
import { Link } from "react-router-dom";
import { Filter } from "../Navbar/Filter";

const ResetPasw = () => {
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
          <h4 className="auth__title">Сброс пароля</h4>

          <form className="auth__form">
            <input
              className="auth__form-input"
              type="text"
              placeholder="Секретное слово"
            />
            <div className="xxx">
              <input
                className="auth__form-input"
                type="text"
                placeholder="Новый пароль"
              />
              <img src={unvisibleImg} alt="" />
            </div>
            <div className="xxx">
              <input
                className="auth__form-input"
                type="text"
                placeholder="Подтвердит"
              />
              <img src={unvisibleImg} alt="" />
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

export default ResetPasw;
