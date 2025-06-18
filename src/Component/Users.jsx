import "./Users.css";
import "./Table.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";

function Users() {
  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              Логин
              <div className="arrow">
                <BiSolidUpArrow />
                <BiSolidDownArrow />
              </div>
            </th>
            <th>
              E-mail
              <div className="arrow">
                <BiSolidUpArrow />
                <BiSolidDownArrow />
              </div>
            </th>
            <th>
              ФИО
              <div className="arrow">
                <BiSolidUpArrow />
                <BiSolidDownArrow />
              </div>
            </th>
            <th>
              Должность
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
              <CiCircleMore className="more-user" />
            </td>
            <td>popova@incenter.pro</td>
            <td>1234DenisiKabirov56789@mail.ru</td>
            <td>Екатерина Владимировна Черепахина</td>
            <td>Администратор</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
