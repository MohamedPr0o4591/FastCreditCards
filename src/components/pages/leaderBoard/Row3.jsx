import React from "react";
import currency from "../../../../public/icon.png";

const Row3 = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>04</td>
            <td>mohamed</td>
            <td className="d-flex align-items-center gap-2">
              <img src={currency} alt="currency" />
              <span>10232</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Row3;
