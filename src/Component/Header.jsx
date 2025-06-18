import "./Header.css";
import { IoIosContact, IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Newmodal from "../Modals/Newmodal";
import Editmodal from "../Modals/Editmodal";

function Header() {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="container">
      <header>
        <div className="left">
          <h1 style={{ color: "grey", fontWeight: 100 }}>CRM</h1>

          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "black",
                  }}
                >
                  Заказы
                </Link>
              </li>
              <li>
                <Link
                  to="/page2"
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "black",
                  }}
                >
                  Архив
                </Link>
              </li>
              <li>
                <Link to="/user"  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "black",
                  }}>
                  Пользователи
                </Link>
              </li>
            </ul>
          </nav>

          <div className="actions">
            <button className="btn blue" onClick={() => setShowNewModal(true)}>
              + Новый заказ
            </button>
            <button className="btn" onClick={() => setShowEditModal(true)}>
              ✎ Редактировать
            </button>
          </div>
        </div>

        <div className="end">
          <p>Зобачёв Владимир</p>
          <IoIosContact className="contact" />
          <IoIosLogOut className="exit" />
        </div>
      </header>

      {/* Modallar */}
      {showNewModal && (
        <div className="overlay">
          <Newmodal onClose={() => setShowNewModal(false)} />
        </div>
      )}

      {showEditModal && (
        <div className="overlay">
          <Editmodal onClose={() => setShowEditModal(false)} />
        </div>
      )}
    </div>
  );
}

export default Header;
