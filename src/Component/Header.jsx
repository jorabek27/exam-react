import "./Header.css";
import { IoIosContact, IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Newmodal from "../Modals/Newmodal";
import Editmodal from "../Modals/Editmodal";

function Header() {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const closeNewModal = () => setShowNewModal(false);
  const closeEditModal = () => setShowEditModal(false);

  return (
    <div className="container">
      <header>
        <div className="left">
          <h1 className="logo">CRM</h1>

          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Заказы</Link>
              </li>
              <li>
                <Link to="/page2">Архив</Link>
              </li>
              <li>
                <Link to="/user">Пользователи</Link>
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

      {/* Modal oynalar */}
      {showNewModal && (
        <div className="overlay">
          <Newmodal onClose={closeNewModal} />
        </div>
      )}

      {showEditModal && (
        <div className="overlay">
          <Editmodal onClose={closeEditModal} />
        </div>
      )}
    </div>
  );
}

export default Header;
