import "./Newmodal.css";

function Editmodal({ onClose }) {
  return (
    <div className="modal-container">
      <nav className="modal-header">
        <b>Редактировать заказ</b>
      </nav>
      <div className="bigpair">
        <div className="modal-body-left">
          <div className="input-group">
            <p className="dataediting">Дата монтажа</p>
            <input type="date" id="datainput" />
            <p className="trs">ТРЦ</p>

            {[
              "Радуга парк",
              "Академ Кит Ехб",
              "Глобус Гринвич",
              "Пассаж Фан-Фан",
              "КОМСОМОЛЛ",
              "Алатырь Мега",
              "Другое",
            ].map((text, index) => (
              <div className="radio" key={index}>
                <input type="radio" name="trs" />
                <p>{text}</p>
              </div>
            ))}

            <input type="text" id="input-trs" placeholder="Название ТРЦ" />
          </div>

          <p className="gdepechat">Где печать</p>
          {["Солнечный город", "Мастерра", "Дельта Принт", "Сила Принта", "Другое"].map(
            (text, index) => (
              <div className="radio" key={index}>
                <input type="radio" name="print" />
                <p>{text}</p>
              </div>
            )
          )}
          <input type="text" id="input-nk" placeholder="Название компании" />
        </div>

        <div className="modal-body-right">
          <p className="dataediting">Монтажник</p>
          <select id="select-right">
            <option value="">Выберите монтажника</option>
          </select>

          <p className="dataediting">Вид работ</p>
          <textarea id="textarea" placeholder="Что требуется сделать"></textarea>

          <p className="dataediting">Бренд</p>
          <input type="text" className="rightinput" placeholder="Название бренда" />

          <p className="dataediting">Фотопривязка</p>
          <input type="text" className="rightinput" placeholder="Ссылка на фото" />

          <div className="pair-inputs">
            <div>
              <p className="dataediting">Стоимость</p>
              <input type="text" className="pair" placeholder="Руб." />
            </div>
            <div>
              <p className="dataediting">Стоимость адм.</p>
              <input type="text" className="pair" placeholder="Руб." />
            </div>
          </div>

          <p className="dataediting">Важность</p>
          {[
            "ВЫСОКАЯ в течении 24 часов",
            "ТЕКУЩАЯ в течении 48 часов",
            "НИЗКАЯ в течении 52 часов",
          ].map((text, index) => (
            <div className="radio" key={index}>
              <input type="radio" name="priority" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <button onClick={onClose} className="cancel-btn">Отмена</button>
        <button className="submit-btn">Сохранить</button>
      </footer>
    </div>
  );
}

export default Editmodal;
