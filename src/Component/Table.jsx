import "./Table.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>
            No
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Дата монтажа
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
            <br />
            ТРЦ
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Вид работ
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Важность
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Бренд
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Где печать
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Фото
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Менеджер
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Монтажник
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Стоимость
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Статус
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
          <th>
            Комментарий
            <div className="arrow">
              <BiSolidUpArrow />
              <BiSolidDownArrow />
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <CiCircleMore className="more" />
          </td>
          <td>
            <div className="no">
              <p className="number">87</p>
              <div className="time">
                <p>4.02.2025</p>
                <p className="clock">9:20:25</p>
              </div>
            </div>
          </td>
          <td>
            <div className="datedit">
              <p className="number">14.03.22</p>
              <p>Радуга Парк</p>
            </div>
          </td>
          <td>
            <p>Замена макетов в коробах на паркинге, меняем все 6 шт.</p>
          </td>
          <td>
            <p className="important">Текущая 48 ч</p>
          </td>
          <td>
            <p>Радуга бренд</p>
          </td>
          <td>
            <p>Солнечный город</p>
          </td>
          <td>
            <p className="photo">Фото</p>
          </td>
          <td>
            <p>Екатерина Попова</p>
          </td>
          <td>
            <p>Морозов Роман Викторович</p>
          </td>
          <td>
            <div className="cost">
              <p>45000</p>
              <div>
                <span className="adm">адм.</span>
                <p>35000</p>
              </div>
            </div>
          </td>
          <td>
            <select name="status" id="select">
              <option value="waiting">В ожидании</option>
              <option value="accepted">Принято</option>
              <option value="done">Выполнено</option>
            </select>
          </td>
          <td>
            <p>У Амвеи нужно узнать какой у них бюджет...</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
